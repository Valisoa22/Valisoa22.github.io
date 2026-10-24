# Démarche et contribution personnelle

## Périmètre et provenance

Ce document décrit la contribution observée dans les échanges de préparation du portfolio V, première itération du cours POL-6078. Il a été rédigé rétrospectivement avec ChatGPT/Codex pour rendre le travail compréhensible au lecteur du dépôt. Il ne présente pas l’étudiant comme l’auteur autonome de tout le code.

## Répartition du travail

| Domaine | Contribution personnelle du titulaire | Assistance technique de ChatGPT/Codex |
|---|---|---|
| Informations | Fourniture du parcours, du projet envisagé et des coordonnées; confirmation de la formation à afficher | Structuration et reformulation des éléments fournis dans les sections HTML |
| Photographies | Fourniture et choix des cinq images; autorisation de publication et confirmation des droits nécessaires | Optimisation en WebP, retrait des métadonnées EXIF, intégration et cadrage CSS |
| Objectif | Demande d’un portfolio professionnel, sobre, personnel et compréhensible pour un débutant | Proposition initiale, réalisation du code et explications |
| Retour sur la première version | Demande détaillée de refonte : V sans point, Times New Roman, nom homogène, portrait rond plus petit à droite, couverture en haut, contacts uniformes, suppression des ornements, pied de page simplifié | Traduction des consignes en HTML/CSS, réglages responsive et page de mentions légales |
| Exactitude et publication | Confirmation explicite de la maîtrise en études internationales; approbation de l’aperçu puis de sa publication | Vérifications techniques, transferts GitHub, fusion autorisée et contrôle du déploiement |
| Traçabilité | Demande de montrer les étapes et de rendre sa contribution visible au professeur | Commits descriptifs, documentation, conservation du guide original et de l’historique |

## Décisions personnelles traduites en code

1. **Identité plus simple.** La demande « juste V, sans point » devient le monogramme de navigation, le titre de l’onglet et le favicon.
2. **Cohérence du nom et des textes.** La demande d’une seule police devient une règle globale Times New Roman. Le nom complet reste dans un seul titre, sans portion grossie ou transformée automatiquement en majuscules.
3. **Photographies mieux hiérarchisées.** La couverture est déplacée au début du contenu. Le portrait accompagne le texte à droite sur ordinateur dans un cadre circulaire réduit.
4. **Présentation sobre.** Les flèches, grands tirets et légendes décoratives visées sont retirés. La palette approuvée est conservée.
5. **Contacts équivalents.** Courriel, GitHub et Facebook utilisent une même liste et les mêmes styles.
6. **Pied de page épuré et attribution maintenue.** Les crédits détaillés sont regroupés dans une page de mentions légales, conformément à la demande de conserver les obligations de licence.

Ces choix constituent une intervention éditoriale et une direction de conception de l’étudiant. L’écriture et l’application techniques ont été assistées.

## Déroulement réel

- Le dépôt existant et le guide du cours ont servi de point de départ.
- Une première version personnalisée a été préparée à partir des informations et images fournies, puis publiée après autorisation.
- L’étudiant a examiné le résultat et fourni des consignes détaillées de refonte.
- La refonte a été préparée sur `refonte-sobre-times`, enregistrée en cinq commits distants et présentée dans la pull request #1.
- Après examen de l’aperçu, l’étudiant a confirmé la formation puis approuvé explicitement la publication.
- La pull request a été fusionnée avec un commit de fusion, sans écraser les cinq commits. GitHub Pages a publié la version approuvée.
- À la demande de l’étudiant, le README et ce document ont ensuite été rédigés pour relier les décisions, les fichiers et les traces de travail.

Les dates et différences exactes restent consultables dans l’[historique GitHub](https://github.com/Valisoa22/Valisoa22.github.io/commits/main/) et la [pull request #1](https://github.com/Valisoa22/Valisoa22.github.io/pull/1). Les validations conversationnelles sont rapportées ici; elles ne sont pas présentées comme des commentaires ou des revues GitHub qui auraient été écrits par l’étudiant.

## Lire les commits correctement

Les commits ont été enregistrés sous le compte GitHub du titulaire au cours d’un accompagnement autorisé. Cela permet d’identifier les versions et les modifications, mais ne suffit pas à attribuer l’écriture manuelle de chaque ligne. L’historique n’a pas été antidaté, artificiellement étalé ou réécrit pour simuler une progression indépendante. Les étapes publiées correspondent aux changements effectivement envoyés.

## Repères pour expliquer le projet

- Le dépôt conserve les fichiers et leur historique; GitHub Pages en sert une version navigable.
- Un commit est un enregistrement d’un ensemble de modifications avec un message descriptif.
- Une branche permet de préparer des modifications séparément de la version principale.
- Une pull request présente les différences avant leur intégration; une fusion réunit les travaux.
- HTML décrit le contenu, CSS sa présentation et JavaScript les interactions.

Ces repères accompagnent l’apprentissage. Ils ne constituent pas une attestation que l’étudiant maîtrise déjà toutes les notions. Les résultats des tests techniques sont attribués à l’assistance et détaillés dans [VERIFICATION.md](VERIFICATION.md).
