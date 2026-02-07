# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Redesign du site **2AVI** (Architecture Audio Visuelle et Informatique) — prestataire audiovisuel B2B spécialisé cinéma, événementiel et installations. Le site actuel (WordPress sur 2avi.fr) est migré vers Next.js. Un audit complet du contenu existant est disponible dans `audit-contenu-2avi.md`.

## Stack technique

- **Framework** : Next.js 16 (App Router) avec Turbopack
- **Package manager** : pnpm 10
- **Langage** : TypeScript 5.9 (mode strict)
- **Styling** : Tailwind CSS 4 (via `@tailwindcss/postcss`) — configuration dans `app/globals.css` via `@theme`
- **UI** : Radix UI primitives + class-variance-authority (CVA) pour les variantes
- **Animations** : Motion (Framer Motion v12)
- **Font** : Inter (via `next/font/google`)
- **Images** : next/image avec formats AVIF/WebP (config dans `next.config.ts`)
- **Thème** : next-themes (prévu, pas encore câblé)

## Commandes

```bash
pnpm dev          # Serveur de dev (Turbopack)
pnpm build        # Build production
pnpm lint         # ESLint --fix
pnpm ts           # Vérification TypeScript (tsc --noEmit)
pnpm clean        # ESLint --fix + tsc --noEmit + Prettier
```

## Architecture

```
app/                  # Next.js App Router (routes, layouts, globals.css)
src/
  components/ui/      # Composants UI réutilisables (pattern shadcn/ui : Button, Separator)
  lib/utils.ts        # Utilitaire cn() (clsx + tailwind-merge)
  site-config.ts      # Configuration centralisée du site (infos entreprise, navigation, contacts)
  types/index.ts      # Types partagés (NavItem, Reference, NewsArticle)
public/images/        # Assets images organisés par section (00-homepage, 12-references, 13-news, common)
scripts/              # Scripts utilitaires (download-assets.mjs pour récupérer les images du site existant)
docs/                 # Documentation projet (audit contenu, inventaire images)
```

## Conventions

### Path aliases
- `@/*` → `./src/*`
- `@app/*` → `./app/*`

### Design tokens (dans `app/globals.css` via `@theme`)
- **Couleurs brand** : `brand-red` (#e30613), `brand-red-dark` (#b8050f), `brand-black` (#1a1a1a), `brand-white`, `brand-gray` (#f5f5f5)
- **Couleurs sémantiques** : `background`, `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `border`
- **Radius** : `radius-sm/md/lg/xl`

### Composants UI
Les composants suivent le pattern shadcn/ui : primitives Radix + CVA pour les variantes + `cn()` pour la fusion de classes. Les types utilisent `type` (pas `interface`) conformément à la règle ESLint `consistent-type-definitions`.

### ESLint
Configuration stricte (`tseslint.configs.strict` + `stylistic`). Règles notables :
- `consistent-type-imports` / `consistent-type-exports` — imports de types avec `type`
- `consistent-type-definitions: ["error", "type"]` — pas d'interfaces
- `prefer-template` — template literals obligatoires
- `member-ordering` — ordre des membres dans les types/classes
- `@next/next/no-img-element: 0` — `<img>` autorisé (certaines images statiques)

### Langue
- Site en français (`lang="fr"`)
- Code et noms de variables en anglais
