# Site Mada Stream Media — maquette HTML prête à intégrer

Site statique complet (HTML + CSS + JS), construit à partir des deux PDF fournis.
Il est pensé pour être transposé tel quel dans WordPress.

## 1. Contenu du dossier

```
msm-site/
├─ index.html              Accueil
├─ agence.html             Qui sommes-nous (ADN, vision, mission, méthode, équipe)
├─ services.html           Production, contenus publicitaires, location studio, FAQ
├─ mini-series.html        Le projet mini-séries, concept, objectifs, diffusion, audience
├─ sponsoring.html         Coût visibilité + packs Bronze / Silver / Gold
├─ references.html         Partenaires, audience, secteurs
├─ contact.html            Coordonnées + formulaire
├─ mentions-legales.html   Mentions légales (à compléter)
└─ assets/
   ├─ css/style.css        Toute la feuille de style
   ├─ js/main.js           Menu mobile, année, formulaire
   └─ img/                 Logo, photos et logos partenaires extraits des PDF
```

Ouvrez `index.html` dans un navigateur pour tout voir.

## 2. Direction artistique

| Élément | Valeur |
|---|---|
| Bleu MSM | `#0B6DB3` |
| Jaune MSM | `#F5C542` |
| Encre (fond sombre « plateau ») | `#0E1420` |
| Fond clair | `#F5F6F8` |
| Gris texte | `#5E6672` |

- **Titres** : Bricolage Grotesque 800 — **Textes** : Instrument Sans — **Signature manuscrite** : Caveat (reprend l'écriture du PDF « Derrière chaque image, une histoire signée »).
- **Motif de marque** : la dissolution en pixels du logo, reprise en décor discret dans le hero et les en-têtes de page. C'est le seul ornement du site ; tout le reste est volontairement sobre.
- Rythme des pages : bandeau sombre → contenu clair → bandeau sombre, pour que le blanc respire et que les tarifs ressortent.

Les trois polices sont chargées depuis Google Fonts (une ligne `<link>` dans chaque `<head>`).

## 3. Passage à WordPress

**Option la plus simple** : un thème vierge type _Underscores_ ou un thème bloc, avec :
- `header.php` = tout ce qui va de `<!DOCTYPE>` à `<main id="contenu">`
- `footer.php` = du `</main>` à `</html>`
- une page WordPress par fichier HTML, le contenu du `<main>` collé dans l'éditeur (bloc HTML personnalisé)
- `style.css` déposé dans le thème et appelé via `wp_enqueue_style`
- les images dans `/wp-content/themes/votre-theme/assets/img/` ou dans la médiathèque

**Option page builder** (Elementor, Bricks) : reprenez les sections une par une, les classes CSS restent valables si vous chargez `style.css` en feuille additionnelle.

Points d'attention :
- Le formulaire de contact est une démo statique. Remplacez-le par **Contact Form 7**, **WPForms** ou **Fluent Forms** — gardez les mêmes libellés de champs.
- Le bloc carte de la page Contact est un emplacement vide à remplir avec Google Maps ou OpenStreetMap.
- Les liens réseaux sociaux du pied de page sont des `#` : mettez les vraies URL Facebook, YouTube, TikTok et Instagram.
- Pensez à une image de partage (Open Graph) : ajoutez `<meta property="og:image" ...>` dans chaque `<head>`, ou laissez Yoast/Rank Math le gérer.

## 4. Contenus repris des PDF (exacts)

Chiffres Facebook (avril 2026), grille « coût visibilité », packs Bronze/Silver/Gold, format des épisodes, objectifs, stratégie de diffusion, public cible, retombées pour les marques, ADN / vision / mission, descriptions des trois services, noms et rôles de Christian Ratovonony et Valisoa Ramananjanahary, coordonnées, liste des partenaires.

## 5. À vérifier ou à compléter avant mise en ligne

Ces éléments ne figuraient pas dans les PDF : je les ai rédigés pour que le site tienne debout, corrigez-les selon la réalité.

- **Délais annoncés** : « devis sous 48 h ouvrées », « 2 à 3 semaines pour un format court » (services.html, contact.html).
- **Équipement du studio** listé sur services.html (fonds, éclairages, fond vert, régie) et modalités de location (demi-journée / journée / forfait).
- **FAQ services.html** : déplacements hors d'Antananarivo, langues, droits d'utilisation des images.
- **« Bon à savoir » sponsoring.html** : validation du scénario, éléments à fournir, bilan de performance en fin de pack.
- **Méthode en 4 étapes** (agence.html) : à ajuster à votre vrai déroulé.
- **Secteurs clients** (references.html) — déduits de la liste des partenaires.
- **Mentions légales** : forme juridique, NIF, STAT, RCS, directeur de publication, hébergeur.
- L'orthographe exacte de certains partenaires (Grill Gro, Sodiama) a été lue sur les logos : à confirmer.
- Accord écrit des marques pour afficher leurs logos sur le site.

## 6. Améliorations faciles ensuite

- Une page « Épisodes » avec les vidéos YouTube intégrées (custom post type « Épisode » sous WordPress).
- Un article de blog par making-of, pour le référencement.
- Une version anglaise ou malgache avec Polylang, utile pour la diaspora.
