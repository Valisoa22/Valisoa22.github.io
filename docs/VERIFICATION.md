# Vérification de la première itération

État au 23 octobre 2026 (heure du Québec) : **refonte approuvée, intégrée sur main et publiée** sur https://valisoa22.github.io/.

Ce rapport est préparé avec ChatGPT/Codex. Les contrôles techniques ci-dessous ont été exécutés par l’assistant; les validations du contenu et de la publication proviennent du titulaire.

## Publication et historique

- Dépôt public : Valisoa22/Valisoa22.github.io. GitHub Pages sert la branche `main`, dossier racine.
- Commit initial 4eb1fa7 conservé; refonte sur `refonte-sobre-times`, cinq commits conservés par la fusion de la pull request #1 (05f1749).
- Formation et publication confirmées explicitement par le titulaire. La formation affichée reste la maîtrise en études internationales à l’Université Laval.
- Déploiement de la refonte 40045581258 : Success. Déploiement du compte rendu 40045942078 : Success.
- La présente mise à jour du README et de la documentation ne modifie pas le code, la présentation ou les photographies du site approuvé.

## Contrôles exécutés sur le site

| Contrôle | Résultat observé | Portée |
|---|---|---|
| Identité | Titre V, monogramme V, favicon sans point | HTML, SVG et rendu navigateur |
| Informations | Nom et formation confirmés; projet clairement envisagé | Aucun diplôme, emploi ou résultat ajouté |
| Typographie | Tous les éléments affichés utilisent Times New Roman, serif | Styles calculés dans Chromium |
| Ordinateur | Aucun débordement horizontal | Dernier contrôle : clientWidth = scrollWidth = 1363 px |
| Téléphone et tablette | Aucun débordement aux cadres de 320, 390 et 768 px | Tests de la refonte : largeurs utiles 305, 375 et 753 px; pas d’appareils physiques |
| Menu mobile | Ouverture, clic Projet, fermeture; aria-expanded contrôlé | Test de la refonte à 390 px |
| Navigation | Clics sur les cinq liens du menu réussis | Recontrôlés sur le site HTTPS |
| Photographies | Cinq images chargées et décodées | Recontrôlées sur le site HTTPS |
| Galerie | Les trois agrandissements s’ouvrent; Échap ferme le dialogue | Recontrôlés sur le site HTTPS; fermeture par bouton aussi testée en simulation mobile |
| Contact | Trois liens de même taille, police, alignement et espacement; mailto valide | Styles calculés : 18 px et padding 14 px 0 |
| Copie du courriel | Confirmation « Adresse courriel copiée. » après clic | HTTPS; contenu du presse-papiers non confirmé indépendamment |
| Mentions légales | Page accessible par le pied de page | Attribution, modèle, auteur, licence et assistance documentés |
| Ressources et syntaxe | Ressources et ancres locales existantes; identifiants uniques, textes alternatifs présents; node --check valide | index.html, mentions-legales.html et JavaScript personnalisé |
| Console | Aucun message provenant du JavaScript du site relevé dans les contrôles consultés | Messages d’erreur de l’extension du navigateur distingués du site |

## Liens externes et licence

Les requêtes de contrôle effectuées lors de la refonte ont obtenu HTTP 200 pour le dépôt personnel, le gabarit CLESSN, HTML5 UP, Read Only et CC BY 3.0. Facebook répond après redirection vers une connexion : le profil n’a pas pu être vérifié sans authentification. Les destinations sont conservées telles que fournies. Aucun courriel ni message n’a été envoyé.

La licence d’origine LICENSE.txt et les notices des ressources historiques restent intactes. La page mentions-legales.html conserve une attribution accessible depuis le pied de page. Les cinq photographies personnelles ne sont pas présentées comme relevant de la licence du gabarit; leur publication a été autorisée par le titulaire, qui a confirmé les droits nécessaires pour les personnes visibles.

## Documentation et critères

- README remplacé par une présentation du projet, des liens d’évaluation, un tableau des étapes avec commits, une correspondance avec les critères et une explication des fichiers.
- Guide initial conservé sans modification dans GUIDE-ORIGINAL.md, à partir du commit 4eb1fa7.
- DEMARCHE.md attribue au titulaire les contenus, demandes de personnalisation et validations constatés; il attribue l’implémentation, les opérations techniques et les contrôles à l’assistance utilisée.
- CONCEPTION.md mis à jour pour indiquer la fusion et la publication effectives.
- Les commits montrent les changements réels; aucune écriture autonome de code ni progression sur plusieurs jours n’est déduite artificiellement de leur présence.
- Le CV reste facultatif pour cette remise selon les consignes complémentaires originales du professeur.

## Limites et remise

Pas de test sur appareil physique, Safari ou Firefox, ni d’audit exhaustif WCAG. Le profil Facebook et le contenu du presse-papiers ne sont pas vérifiés indépendamment. La documentation de l’assistance ne remplace pas une éventuelle déclaration spécifique demandée par l’enseignant.

Les deux liens à transmettre en privé au professeur sont le dépôt et le site public. La remise universitaire elle-même n’a pas été effectuée par l’assistant.
