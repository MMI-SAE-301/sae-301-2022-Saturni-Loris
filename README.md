# code de base pour TP (et future SAE 301)

- **Nom :** Saturni
- **Prénom :** Loris
- **URL maquette Figma:**https://www.figma.com/file/EIZDLRDsezVTDIjrC3KiFu/SAE301_LorisSaturni?node-id=2%3A59
- **URL publique du site :**
- **URL projet Supabase :**https://ahlzqgaukrgsgmorgyem.supabase.co
  - [X] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [X] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [^1])
- [X] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [X] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files) ou page d'un commit sur Github.

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [X] usage de Classes utilitaires (1pt)
  - [lien vers sa définition](/tailwind.config.js#L12)
  - [lien vers sa son usage](/src/App.vue#L23)

- [X] Composants graphiques (0-1-2pts)
  - [lien](/src/components/LoginLogout.vue)

- Mise en page CSS (0-1-2pts)
  - Quelles techniques (Grilles Flex...)
    - Grid col, flex
  - [lien](/src/App.vue#L85)

- [X] Dark Mode (0-1-2pts)
  - [X] Simple usage de 'dark:'
    - [lien](/App.vue#L83)
    - [lien](/src/pages/index.vue#L78)

  - [X] [usage basique couleurs/fonts](/tailwind.config.js#L17)

  - [X] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"...
    - [lien](/tailwind.config.js#L12)

- Composants "accessibles" (0-1-2pts)
  - [X] textes "accessibles" (eg. 'sr-only')
  - [lien](/src/components/FormMontre.vue#L71)

