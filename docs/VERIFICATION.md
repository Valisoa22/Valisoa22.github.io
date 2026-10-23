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
