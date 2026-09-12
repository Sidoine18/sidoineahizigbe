# Dossier images — convention pour le référencement Google Images

Toutes les images "de contenu" (réalisations, captures de projets, dépôts
GitHub, visuels KONFORTECH…) vivent ici, dans `public/images/`, plutôt que
dispersées dans le code. Deux raisons : Google Images indexe mieux des
fichiers bien nommés à un chemin stable, et ça reste facile à retrouver et
à remplacer.

## Règle de nommage (important pour le SEO)

Un nom de fichier descriptif en kebab-case, en français, qui dit ce que
l'image montre — jamais `IMG_2031.jpg` ou `photo1.png`. Google se sert du
nom de fichier et de l'attribut `alt` pour comprendre le contenu d'une
image.

Bon : `coldtrack-dashboard-esp32-capteurs.jpg`
Mauvais : `image1.jpg`, `Capture d'écran 2025-01-01.png`

Formats recommandés : `.jpg` pour les photos, `.png` pour les captures
d'écran avec du texte net, `.webp` si tu veux optimiser le poids (Next.js
peut aussi convertir automatiquement via `next/image`).

## Arborescence prévue

```
public/images/
  profile/          photo(s) de Sidoine — déjà en place
    sidoine-ahizigbe.jpg
  projects/
    coldtrack/       captures du dashboard, schéma capteurs → ESP32, etc.
    climconnect/     maquettes / captures de la plateforme
    moleculex/       graphiques de comparaison GWP/COP, fiches de fluides
  konfortech/        visuels liés à l'activité KONFORTECH BÉNIN (chantiers,
                     interventions, réalisations)
  og/                image utilisée pour l'aperçu de partage sur les
                     réseaux sociaux (déjà générée, voir app/opengraph-image.png)
```

## Comment ajouter une vraie image de projet

1. Déposer le fichier dans le bon sous-dossier, bien nommé (voir plus haut).
2. Dans la page ou le composant concerné (ex. `components/views/ColdTrackView.tsx`),
   ajouter :
   ```tsx
   import Image from "next/image";

   <Image
     src="/images/projects/coldtrack/coldtrack-dashboard-esp32-capteurs.jpg"
     alt="Tableau de bord ColdTrack affichant température, humidité et alertes en temps réel"
     width={1200}
     height={750}
     className="border border-line"
   />
   ```
   L'attribut `alt` doit décrire l'image en une phrase claire — c'est ce
   que Google lit pour l'indexer, et ce qu'un lecteur d'écran lit pour les
   personnes malvoyantes.

Aucune image n'a été inventée ici pour les projets (ColdTrack, ClimConnect,
MoleculeX, KONFORTECH) : seule la vraie photo de Sidoine est en place
(profil + aperçu réseaux sociaux). Les dossiers `projects/*` et
`konfortech/` sont prêts à recevoir les vraies captures/réalisations dès
qu'elles sont disponibles.
