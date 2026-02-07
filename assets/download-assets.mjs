#!/usr/bin/env node
/**
 * Script de téléchargement des assets du site 2avi.fr — v3
 *
 * Usage: node download-assets.mjs
 *
 * Ce script télécharge toutes les images du site 2avi.fr
 * et les organise dans les dossiers correspondants.
 * v3: Correction des 12 derniers 404 (mauvais dossiers WordPress).
 *     - 10 URLs corrigées (chemin 2017/03/ → 04/, 05/, 06/, 09/)
 *     - 2 images supprimées (Miramar-cannes2019, Cabourg-2019 : introuvables sur le serveur)
 */

import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ASSETS = [
  // =============================================
  // COMMON (logo, éléments partagés)
  // =============================================
  { folder: 'common', filename: 'logo-2avi.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/2avi-cinema.png' },

  // =============================================
  // 00 - HOMEPAGE
  // =============================================
  { folder: '00-homepage', filename: 'home-cinema-plein-air.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/02/home-1.jpg' },
  { folder: '00-homepage', filename: 'home-festival-event.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/02/home-2.jpg' },
  { folder: '00-homepage', filename: 'home-salle-projection.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/02/home-3.jpg' },
  { folder: '00-homepage', filename: 'news-miramar-cannes.png', url: 'https://www.2avi.fr/wp-content/uploads/2020/06/Miramar-news-e1626960951892.png' },
  { folder: '00-homepage', filename: 'news-mi6-chaillot.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/MI6-Chaillot2018-e1626960724891.jpg' },

  // =============================================
  // 02 - SOLUTIONS > CINEMA > EVENEMENTS
  // =============================================
  { folder: '02-solutions-cinema-evenements', filename: 'header-evenements.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/image-entete-05-1.jpg' },
  { folder: '02-solutions-cinema-evenements', filename: 'evenements-avant-premiere.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/cinema-evenements-avant-premiere.jpg' },
  { folder: '02-solutions-cinema-evenements', filename: 'evenements-cine-concert.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/cinema-evenements-cine-concert.jpg' },

  // =============================================
  // HEADERS (images d'en-tête partagées)
  // =============================================
  { folder: 'common', filename: 'header-references.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/image-entete-01.jpg' },
  { folder: 'common', filename: 'header-contact.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/image-entete-02.jpg' },
  { folder: 'common', filename: 'header-news.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/image-entete-03.jpg' },

  // =============================================
  // 12 - REFERENCES (46 images — URLs vérifiées v3, 2 introuvables retirées)
  // =============================================
  { folder: '12-references', filename: 'ref-01-cine-concert-2001-philharmonie.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Cine-concert-2001-Space-Odyssey-Philharmonie-Paris.jpg' },
  { folder: '12-references', filename: 'ref-02-cinema-assemblee-nationale.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Cin%C3%A9ma-Assembl%C3%A9e-Nationale.jpg' },
  { folder: '12-references', filename: 'ref-03-cinema-bnf-netflix.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Cinema-BNF-Netflix.jpg' },
  { folder: '12-references', filename: 'ref-04-plein-air-enghien-2014.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/R%C3%A9f-Enghien-2014.jpg' },
  { folder: '12-references', filename: 'ref-05-grand-rex-cabine.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/R%C3%A9f-Grand-Rex-Cabine.jpg' },
  { folder: '12-references', filename: 'ref-06-led-display-cap3000-a.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Led-Display-cap-3000.jpg' },
  { folder: '12-references', filename: 'ref-07-led-display-cap3000-b.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/R%C3%A9f-Led-Display-cap-3000.jpg' },
  { folder: '12-references', filename: 'ref-08-led-display-4temps.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/R%C3%A9f-Led-Display-Les-4-Temps.jpg' },
  { folder: '12-references', filename: 'ref-09-ghostbuster-moulin-rouge.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Cinema-GhostBuster-Lamachine-du-moulin-rouge.jpg' },
  { folder: '12-references', filename: 'ref-10-cinema-opera-garnier.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Cin%C3%A9ma-Op%C3%A9ra-Garnier-Paris.jpg' },
  { folder: '12-references', filename: 'ref-11-deauville-festival-americain.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Deauville-Festival-Film-americain.jpg' },
  { folder: '12-references', filename: 'ref-12-festival-film-femmes-creteil-2017.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Festival-du-film-de-femmes-Creteil-2017.jpg' },
  { folder: '12-references', filename: 'ref-13-iron-fist-lantenne.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Iron-Fist-LAntenne.jpg' },
  { folder: '12-references', filename: 'ref-14-figures-ombre-ibm.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/Ref-Les-Figures-de-LOmbre-IBM.jpg' },
  { folder: '12-references', filename: 'ref-15-matrix.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/03/matrix.jpg' },
  { folder: '12-references', filename: 'ref-16-cine-concert-mecano-generale-pureaux.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/04/Ref-Cin%C3%A9-concert-Le-M%C3%A9cano-de-la-G%C3%A9n%C3%A9ral-Pureaux.jpg' },
  { folder: '12-references', filename: 'ref-17-cine-concert-visitors-philharmonie.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/04/Ref-Cin%C3%A9-concert-Visitors-Philharmonie-Paris.jpg' },
  { folder: '12-references', filename: 'ref-18-cine-concert-petite-taupe-lyon.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/04/Ref-Cin%C3%A9-concert-La-Petite-Taupel-Auditorium-Lyon.jpg' },
  { folder: '12-references', filename: 'ref-19-cine-concert-temps-modernes-radio.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/05/Ref-Cine-concert-Les-temps-moderne-maison-de-la-radio-1.jpg' },
  { folder: '12-references', filename: 'ref-20-avp-grand-palais-rodin.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/06/Cin%C3%A9ma-Avant-premi%C3%A8re-Grand-Palais-Rodin.png' },
  { folder: '12-references', filename: 'ref-21-loreal-cinema-club-cannes2017.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/05/Ref-Cin%C3%A9ma-LOr%C3%A9al-Cinema-Club-Cannes2017.jpg' },
  { folder: '12-references', filename: 'ref-22-semaine-critique-cannes2017.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/06/Ref-Cin%C3%A9ma-Semaine-de-la-Critique-Cannes2017.jpg' },
  { folder: '12-references', filename: 'ref-23-cine-concert-artiste-lyon.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/06/Ref-Cin%C3%A9-concert-The-Artiste-Auditorium-Lyon.jpg' },
  { folder: '12-references', filename: 'ref-24-festival-lama-2017.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/09/Ref-Cinema-Festival-Lama-2017.jpg' },
  { folder: '12-references', filename: 'ref-25-led-display-ugc19.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/11/Ref-LedDisplay-UGC19.jpg' },
  { folder: '12-references', filename: 'ref-26-led-display-villup.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/11/Ref-LedDisplay-VillUp.jpg' },
  { folder: '12-references', filename: 'ref-27-avp-jumanji-grand-rex.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2017/12/Ref-Cin%C3%A9ma-AVP-Jumanji-Grand-Rex-Paris.jpg' },
  { folder: '12-references', filename: 'ref-28-salle-pleyel-2018.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/02/Ref-Cin%C3%A9ma-Salle-Pleyel-Paris-2018.jpg' },
  { folder: '12-references', filename: 'ref-29-titanic-live.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/03/Titanic-live.jpg' },
  { folder: '12-references', filename: 'ref-30-la-divine.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/03/La-divine.jpg' },
  { folder: '12-references', filename: 'ref-31-festival-creteil-2018.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/03/R%C3%A9f-Festival-creteil-2018.jpg' },
  { folder: '12-references', filename: 'ref-32-mi6-chaillot-2018.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/Ref-Cin%C3%A9ma-MI6-Chaillot2018.jpg' },
  { folder: '12-references', filename: 'ref-33-la-cartonnerie-2018.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/Ref-Cin%C3%A9ma-La-Cartonnerie-2018.jpg' },
  { folder: '12-references', filename: 'ref-34-mopa-2018-arles.png', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/Ref-Cinema-Ev%C3%A8nement-Mopa2018-Arles.png' },
  { folder: '12-references', filename: 'ref-35-grand-action-2018.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/Ref-Cin%C3%A9ma-Grand-Action2018.jpg' },
  { folder: '12-references', filename: 'ref-36-cite-musique-nosferatu.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/06/Cit%C3%A9-de-la-Musique-Nosferatu.jpg' },
  { folder: '12-references', filename: 'ref-37-semaine-critique-cannes-2019.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/06/semaine-de-la-critique-2019.jpg' },
  { folder: '12-references', filename: 'ref-38-st-cheron-plein-air-2019.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/06/ST-Cheron-plein-air-2019.jpg' },
  { folder: '12-references', filename: 'ref-39-mopa-2019.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/06/mopa2019.jpg' },
  { folder: '12-references', filename: 'ref-40-avignon-opera-ecole-images.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/07/Avignon-Op%C3%A9ra-EcoleDesNouvellesImages.jpg' },
  { folder: '12-references', filename: 'ref-41-lariboisiere.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/07/Lariboisi%C3%A8re.jpg' },
  { folder: '12-references', filename: 'ref-42-theatre-marigny-champs-elysees-2019.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2019/07/Ref-Th%C3%A9%C3%A2tre-Marigny-Champs-Elys%C3%A9es-Film-Festival2019.jpg' },
  { folder: '12-references', filename: 'ref-43-plein-air-marcoussis-2020.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2020/06/Ref-cinema-Plein-Air-Marcoussis-Bohemian-Rhapsody-2020.jpg' },
  { folder: '12-references', filename: 'ref-44-plein-air-breuillet-2020.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2020/07/Ref-Cin%C3%A9ma-Plei-Air-Breuillet-2020.jpg' },
  { folder: '12-references', filename: 'ref-45-festival-cabourg-2020.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2020/07/Ref-Festival-Cabourp2020.jpg' },
  { folder: '12-references', filename: 'ref-46-opera-bastille-indes-galantes-2020.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2020/10/Op%C3%A9ra-Bastille-les-indes-Galantes-2020.jpg' },

  // =============================================
  // 13 - NEWS (URLs corrigées après vérification)
  // =============================================
  { folder: '13-news', filename: 'news-miramar-cannes.png', url: 'https://www.2avi.fr/wp-content/uploads/2020/06/Miramar-news-e1626960951892.png' },
  { folder: '13-news', filename: 'news-mi6-chaillot.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/09/MI6-Chaillot2018-e1626960724891.jpg' },
  { folder: '13-news', filename: 'news-ecole-buissonniere.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/02/Ecole-buissonniere.jpg' },
  { folder: '13-news', filename: 'news-st-eustache-roi-des-rois.jpg', url: 'https://www.2avi.fr/wp-content/uploads/2018/02/st-eustache-01.jpg' },
  { folder: '13-news', filename: 'news-festival-lama-2017.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/10/Lama2017.png' },
  { folder: '13-news', filename: 'news-dunkerque.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/10/Dunkerque.png' },
  { folder: '13-news', filename: 'news-semaine-critique-remise-prix.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/07/semaine-de-la-critique-remise-prix.png' },
  { folder: '13-news', filename: 'news-semaine-critique-affiche.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/07/semaine-de-la-critique-affiche.png' },
  { folder: '13-news', filename: 'news-loreal-cannes-elle-fanning.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/07/loreal-cannes-elle-fanning-02.png' },
  { folder: '13-news', filename: 'news-loreal-cannes.png', url: 'https://www.2avi.fr/wp-content/uploads/2017/07/loreal-cannes.png' },
];

async function downloadFile(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filepath, buffer);
    return { success: true, size: buffer.length };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎬 Téléchargement des assets 2avi.fr — v3 (12 derniers 404 corrigés)');
  console.log('='.repeat(55));

  let success = 0;
  let failed = 0;
  const errors = [];

  for (const asset of ASSETS) {
    const folderPath = join(__dirname, asset.folder);
    if (!existsSync(folderPath)) {
      await mkdir(folderPath, { recursive: true });
    }

    const filepath = join(folderPath, asset.filename);
    process.stdout.write(`  📥 ${asset.folder}/${asset.filename}...`);

    const result = await downloadFile(asset.url, filepath);
    if (result.success) {
      console.log(` ✅ (${(result.size / 1024).toFixed(1)} KB)`);
      success++;
    } else {
      console.log(` ❌ ${result.error}`);
      errors.push(`${asset.folder}/${asset.filename}: ${result.error}`);
      failed++;
    }
  }

  console.log('\n' + '='.repeat(55));
  console.log(`📊 Résultat: ${success}/${ASSETS.length} téléchargés`);
  if (failed > 0) {
    console.log(`❌ ${failed} échoués:`);
    errors.forEach(e => console.log(`   - ${e}`));
  }
  console.log(`\n📁 Assets stockés dans: ${__dirname}`);
}

main();
