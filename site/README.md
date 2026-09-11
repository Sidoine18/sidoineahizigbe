# Sidoine Ahizigbe — Site personnel

Site personnel de Sidoine Ahizigbe (sidoineahizigbe.online), construit avec
Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion.

## Démarrage

```bash
npm install
npm run dev
```

Le site tourne alors sur http://localhost:3000.

```bash
npm run build
npm start
```

pour une build de production.

> **Note sur une erreur de build Vercel rencontrée précédemment** — le log
> montrait `Module not found: Can't resolve '@/components/SectionHeader'`
> (et Timeline, ContactForm) alors que ces fichiers existent bien dans ce
> projet et que `npm run build` passe sans erreur en local. Cela veut dire
> que ces fichiers n'étaient pas présents (ou pas à jour) dans le dépôt
> GitHub connecté à Vercel au moment du build — pas un bug du code. Pour
> repartir sur une base saine : remplacer entièrement le contenu du dépôt
> GitHub par celui de ce zip (au lieu de fusionner fichier par fichier), puis
> redéployer.

## Architecture

```
app/                 routes (App Router) — une page = un dossier/page.tsx
  about/  expertise/  projects/  projects/coldtrack/
  projects/climconnect/  projects/moleculex/
  konfortech/  vision/  cv/  contact/
  layout.tsx          layout racine + métadonnées SEO par défaut
  not-found.tsx        page 404 "Signal perdu"
  sitemap.ts            sitemap.xml généré dynamiquement
  robots.ts              robots.txt généré dynamiquement
components/          composants réutilisables (Navbar, Footer, TechnicalSignal,
                     ProjectCard, ExpertiseCard, Timeline, ContactForm, etc.)
data/                métadonnées de routing (nav, projets)
locales/             dictionnaires FR / EN (fr.ts est la source de vérité,
                     en.ts doit garder exactement la même forme — voir le
                     type `Dictionary`)
lib/i18n.tsx          contexte React pour le switch de langue
public/documents/    emplacement du CV PDF (voir PLACE-CV-HERE.txt)
```

## Contenu & honnêteté du profil

Tout le texte (FR et EN) vit dans `locales/fr.ts` et `locales/en.ts`.
Aucune formulation "ingénieur" n'est utilisée nulle part : le positionnement
reste étudiant en Froid & Climatisation / Génie Énergétique et Procédés à
l'UNSTIM, avec KONFORTECH BÉNIN comme structure distincte portant l'activité
professionnelle. Pour changer un texte, éditer uniquement ces deux fichiers —
la mise en page n'a pas à bouger.

## Formulaire de contact

Le formulaire (`components/ContactForm.tsx`) envoie directement vers
Web3Forms (`https://api.web3forms.com/submit`) avec la clé d'accès fournie
dans le brief. Aucune base de données, aucun backend custom. Un champ
honeypot (`botcheck`) filtre une partie du spam.

## Internationalisation — simplification assumée

Le site est bilingue FR/EN, mais via un switch **côté client** (contexte
React, persistance `localStorage`), et non via des routes distinctes
`/fr/...` `/en/...`. C'est un choix pragmatique pour ce premier livrable :
plus simple à maintenir, mais moins optimal pour le SEO multilingue qu'une
vraie solution de routing i18n (ex. `next-intl`). Si le SEO anglophone
devient prioritaire, migrer vers `next-intl` est direct — les dictionnaires
`locales/fr.ts` et `locales/en.ts` sont déjà structurés pour ça.

## CV

Le CV réel (`public/documents/cv-sidoine-ahizigbe.pdf`) est généré et à jour :
formation académique réelle (CEP, BEPC, BAC série D, Licence UNSTIM en cours),
langues, compétences (les 4 domaines du site), certificats YALI Network,
projets et centres d'intérêt. Aucune mention de communication digitale /
community management / Bénin Boost Digital Service — retirée à la demande de
Sidoine. Le bouton "Télécharger le CV" sur `/cv` pointe déjà vers ce fichier.

## Favicon

`app/icon.png` et `app/apple-icon.png` (photo de Sidoine, recadrée en carré)
sont détectés automatiquement par Next.js — aucune configuration
supplémentaire nécessaire.

## À faire avant mise en production

- [ ] Ajouter une image Open Graph réelle (`app/opengraph-image.png`) pour le
      partage sur les réseaux sociaux
- [ ] Vérifier que l'email et le numéro WhatsApp sont toujours d'actualité
- [ ] Remplacer les métadonnées par page si un contrôle SEO plus fin est
      souhaité (actuellement : métadonnées par défaut définies dans
      `app/layout.tsx`, communes à toutes les pages)
- [ ] `npm install` puis `npm run build` pour valider la build avant déploiement
