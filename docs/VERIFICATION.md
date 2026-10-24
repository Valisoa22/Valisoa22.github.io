# Vérification de la première itération

État au 23 octobre 2026 : version publiée sur https://valisoa22.github.io/ ; déploiement GitHub Pages vérifié avec succès.

## Matrice de conformité

| Critère | Mise en œuvre | État |
|---|---|---|
| Dépôt et historique — 30 % | Dépôt public Valisoa22/Valisoa22.github.io; commit initial conservé; changements publiés par groupes de fichiers via GitHub | Historique visible |
| README et modifications — 50 % | Titre, présentation, parcours, projet envisagé, médias, contacts et navigation personnalisés; structure index.html/assets/images conservée | Publié |
| Design — 6 points | Composition originale bleu nuit/ivoire/doré, typographie serif et sans-serif, parcours chronologique, galerie asymétrique | Réalisé |
| Contenu — 6 points | Sources personnelles, formation et orthographe confirmées; aucun diplôme de master obtenu ni entreprise lancée inventés | Contenu confirmé par le titulaire |
| Fonctionnalités — 5 points | Menu mobile, galerie avec dialogue clavier, navigation de sections, copie du courriel en contexte sécurisé | Tests partiels ci-dessous |
| Créativité — 3 points | Fil conducteur Madagascar–Canada et photographies personnelles | Réalisé |
| CV | Facultatif pour la mi-session selon le document original des consignes complémentaires | Non inclus |
| Attribution | CLESSN, Read Only / HTML5 UP, CC BY 3.0; assistance IA documentée | Réalisé |
| Publication | GitHub Pages déjà activé au début de cette intervention | Version personnalisée publiée |
| Remise | Deux URL à envoyer en privé, conformément aux consignes originales | Non effectuée |

## Contrôles exécutés

- Lecture du protocole, du document personnel, du dossier de transition et du référentiel; consultation des passages pertinents du plan, du README et de la licence. Consignes originales du professeur récupérées et lues.
- Inspection réelle du dépôt : public, branche main, Pages activé, droit push indiqué par la connexion; un seul commit initial avant intervention.
- Contrôle statique : toutes les ancres et ressources locales existent; IDs uniques, un H1, langue fr-CA, attributs alt présents; liens mailto et HTTPS construits à partir des informations fournies.
- Syntaxe JavaScript : node --check réussi. git diff --check réussi.
- Affichage Chromium : accueil et galerie sur ordinateur, projet sur mobile, contact et pied de page examinés.
- Responsive dans des cadres de largeur 320, 390 et 768 px : aucun débordement horizontal (largeurs utiles observées 305, 375 et 753 px, barres de défilement exclues). Vérification supplémentaire à largeur de fenêtre 1363 px : pas de débordement.
- Menu 390 px : ouverture, navigation vers Projet puis fermeture vérifiées.
- Galerie : ouverture de la photo de soccer, focus initial sur Fermer, fermeture avec Échap et retour du focus au lien d’origine vérifiés.
- Cinq images chargées et décodées dans le navigateur; 654 256 octets au total; orientation appliquée et absence de données EXIF vérifiée sur les cinq fichiers WebP.
- Contrastes calculés : texte principal 13,15:1; texte secondaire 5,75:1; titres verts 3,68:1 ou plus (grands caractères); titres dorés sur bleu nuit 7,02:1.
- Aucune erreur provenant du JavaScript du site dans les journaux consultés; des messages de l’extension de navigateur sont présents et ne proviennent pas du site.

## Limites et vérifications restantes

- Aucun test sur un téléphone physique ni dans Safari ou Firefox; aucune certification exhaustive WCAG.
- Copie du courriel : repli mailto présent en HTTP; en HTTPS, clic testé et confirmation « Adresse courriel copiée. » affichée. Contenu du presse-papiers non confirmé indépendamment. Aucun courriel envoyé.
- Liens externes : les deux dépôts GitHub répondent HTTP 200; le site public a été vérifié dans Chromium après déploiement et présente le portfolio personnalisé. Facebook redirige vers une connexion (profil non vérifié). HTML5 UP retourne HTTP 403 depuis cet environnement : lien conservé pour attribution, contenu non vérifié par ce test.
- Le titulaire a explicitement autorisé la publication de son nom, parcours, projet, courriel, liens et cinq photos sur GitHub et GitHub Pages; il a confirmé disposer des autorisations nécessaires pour les personnes visibles.
- Les modalités particulières de déclaration IA restent à vérifier selon les directives professorales. L’assistance utilisée est explicitement documentée.
- Déploiement du portfolio (commit 4966144) vérifié : exécution Pages 40042001872, statut Success. Les cinq photos sont chargées et décodées sur le site HTTPS. La remise universitaire reste à effectuer par le titulaire.

## Refonte sobre, vérifications du 23 octobre 2026

Statut : préparée sur `refonte-sobre-times`. L’intégration sur `main` et le déploiement de cette refonte attendent la validation finale du titulaire. Les résultats de publication ci-dessus concernent la version précédente.

### Contrôles réellement exécutés

- Inspection et récupération de `main` : base 150fd5b, sept commits préexistants conservés. Branche dédiée créée dans le dépôt GitHub.
- Contrôle statique des deux pages : ressources locales existantes, ancres valides, identifiants uniques, textes alternatifs présents; absence de grands tirets et de flèches décoratives dans les textes visibles. Syntaxe JavaScript et `git diff --check` valides.
- Chromium ordinateur, fenêtre de 1363 px : largeur de document 1348 px, sans débordement. Couverture, portrait, sections, contacts et pied de page inspectés visuellement.
- Formats simulés dans des cadres de 320, 390 et 768 px : largeurs utiles 305, 375 et 753 px; scrollWidth égal à clientWidth dans les trois cas. Ce sont des simulations de largeur, pas des tests sur appareils physiques.
- Correction après inspection : cadrage de la couverture vers le bas pour montrer l’eau; réduction homogène du titre à 26 px sous 380 px pour éviter une dernière lettre isolée; navigation sans animation de défilement.
- Police calculée des éléments affichés sur ordinateur : Times New Roman, serif. Portrait mesuré à 240 × 240 px, rayon de 50 %. Trois contacts mesurés à 18 px, avec padding 14 px 0 et alignement identique.
- Clic sur les cinq liens du menu : ancres attendues obtenues. Menu téléphone : ouverture puis clic Projet et fermeture confirmées par aria-expanded.
- Trois photographies de galerie ouvertes sur ordinateur, fermeture avec Échap; ouverture et fermeture par bouton testées sur téléphone simulé. Les cinq photographies du site sont chargées et décodées.
- Page des mentions légales ouverte via son lien. Attribution et licence conservées dans la documentation, cette page et LICENSE.txt.
- Liens externes testés par requêtes HTTP : dépôt personnel, gabarit CLESSN, HTML5 UP, page Read Only et licence CC BY 3.0 répondent 200. Facebook répond 200 après redirection vers sa page de connexion; profil non vérifié. Destination mailto contrôlée, aucun courriel envoyé.
- Journaux Chromium consultés : les erreurs relevées concernent l’extension du navigateur, pas le code du site.

### Limites restantes

- Déploiement de la refonte et nouveau contrôle en HTTPS à effectuer après validation. La copie du courriel est masquée dans l’aperçu HTTP; le JavaScript correspondant est inchangé, mais son fonctionnement HTTPS doit être recontrôlé après intégration.
- Pas de test sur téléphone physique, Safari ou Firefox, ni audit exhaustif d’accessibilité.
- Les contenus biographiques du site ont été conservés sans changement arbitraire; la formation actuelle doit être reconfirmée par le titulaire avant publication en cas de correction.

### Publication approuvée et vérifiée

Le 23 octobre 2026, le titulaire a confirmé la formation « Maîtrise en études internationales » et autorisé la publication de la refonte. La pull request #1 a été fusionnée avec conservation des cinq commits (commit de fusion 05f1749). L’exécution GitHub Pages 40045581258 a terminé avec le statut Success.

Le site HTTPS a été ouvert après déploiement : titre V, nouvelle couverture, portrait circulaire, formation conservée et cinq photographies chargées. L’agrandissement de la randonnée puis la fermeture par Échap fonctionnent. Le clic sur « Copier le courriel » affiche « Adresse courriel copiée. »; le contenu du presse-papiers n’a pas été contrôlé indépendamment. La page des mentions légales s’ouvre correctement. Aucun courriel n’a été envoyé. La validation finale et le déploiement ne sont donc plus en attente; les limites sur les appareils physiques et autres navigateurs restent applicables.
