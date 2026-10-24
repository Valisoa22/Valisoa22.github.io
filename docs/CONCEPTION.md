# Conception et crédits

Ce site personnel est réalisé dans le cadre de POL-6078, Université Laval, automne 2026.

## Origine et adaptations

Base : [clessn/gabarit_site_web](https://github.com/clessn/gabarit_site_web), modèle **Read Only**, par HTML5 UP / AJ (@ajlkn), sous licence Creative Commons Attribution 3.0. Le fichier LICENSE.txt et les mentions d’origine sont conservés.

La structure HTML a été adaptée : nouvelle navigation, accueil avec portrait, parcours, projet entrepreneurial, galerie et contact. Les feuilles `assets/css/personnel.css` et `assets/js/personnel.js` portent la personnalisation. Les ressources historiques du gabarit restent dans le dépôt mais ne sont plus chargées par la page : jQuery, Scrollex, Scrolly, Browser et Breakpoints, ainsi que Font Awesome. Leurs mentions d’origine sont préservées. La page utilise des polices système et n’émet aucune requête vers Google Fonts.

Les photographies personnelles sont fournies par le titulaire du site. Elles ne sont pas placées sous la licence du gabarit. Les copies Web sont orientées correctement, redimensionnées et exportées en WebP sans métadonnées EXIF. Aucun outil de génération d’images n’a modifié leur contenu.

## Assistance à la réalisation

ChatGPT / Codex a assisté la reformulation des textes fournis, la conception visuelle, l’écriture HTML/CSS/JavaScript et les vérifications techniques. Les faits biographiques et le projet proviennent des informations de l’étudiant; la plateforme d’import-export est un projet envisagé. Cette mention documente l’assistance et ne remplace pas une éventuelle déclaration spécifique exigée par l’enseignant.

## Modifier le site

- Contenu, liens et textes alternatifs : `index.html`.
- Couleurs, mise en page et adaptation mobile : `assets/css/personnel.css`.
- Menu, agrandissement des photos et copie du courriel : `assets/js/personnel.js`.
- Images : `images/`.

Aucune installation et aucun serveur applicatif ne sont nécessaires. GitHub Pages sert les fichiers à partir de `main`, dossier racine. Le CV est réservé à une itération ultérieure.

## Refonte sobre du 23 octobre 2026

Préparée sur la branche `refonte-sobre-times`, sans modifier la version publiée sur `main` avant la validation finale demandée par le titulaire.

- Identité : lettre V sans point dans la navigation, l’onglet et le favicon; retrait des flèches et des tirets décoratifs.
- Typographie : Times New Roman sur l’ensemble de l’interface. Le nom complet est un seul titre, sans différences de taille, de graisse ou de casse entre ses parties. Les paragraphes sont à 18 px, les éléments secondaires à 15–17 px; les titres ont des tailles adaptatives et modérées.
- Photographies : couverture unique immédiatement sous la navigation; `object-fit: cover` et cadrage vers le bas pour préserver l’eau et les rives. Portrait à droite sur ordinateur, circulaire grâce à `aspect-ratio: 1` et `border-radius: 50%`, de 240 px à 144 px suivant l’écran. Les fichiers photographiques restent inchangés.
- Contacts : une liste unique avec la même règle CSS pour le courriel, GitHub et Facebook. Le lien `mailto:` et la copie progressive du courriel sont conservés.
- Pied de page : nom, année, retour en haut et lien discret vers `mentions-legales.html`. Cette page rassemble le titre et l’auteur du modèle, les liens d’origine, la licence, la description de l’adaptation et l’assistance IA. LICENSE.txt est conservé intégralement, ainsi que les notices des ressources historiques.
- Le CSS est mis en forme et commenté pour faciliter l’apprentissage. Le JavaScript du menu, de la galerie et de la copie n’a pas été modifié.

### Comprendre les fichiers

HTML décrit le contenu et son ordre : déplacer la figure de couverture la fait apparaître avant la présentation. CSS définit l’apparence : la grille place le texte et le portrait côte à côte; les media queries adaptent la disposition aux petits écrans. Le JavaScript préexistant ouvre le menu et les photographies, et propose la copie du courriel en HTTPS.
