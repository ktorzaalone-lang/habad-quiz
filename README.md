# 770 Habad Quiz

Application de quiz sur Habad : les Rabbeim, la 'hassidout, les coutumes (minhaguim) et l'histoire du mouvement.
2 000 questions réparties en 4 niveaux (Facile, Moyen, Difficile, Expert ; plus de 900 faciles) et 8 thèmes.

**Site :** https://ktorzaalone-lang.github.io/habad-quiz/

## Fonctionnalités

- **Mode solo** : sélection du niveau, puis du thème et du nombre de questions, avec suivi de la progression par niveau et par thème.
- **Mode multijoueur** : un organisateur crée un salon et communique un code à 5 caractères ; les participants le saisissent pour rejoindre la partie.
- **Révision** : les questions manquées peuvent être rejouées depuis l'accueil.
- **Musique de fond** : des nigounim tirés au hasard accompagnent l'application (pour en ajouter un : déposer le .mp3 dans assets/audio/ et ajouter son chemin dans la liste NIGOUNIM de index.html) (bouton en haut à droite pour la couper). Les lettres du titre changent de police au rythme de la musique.
- **Hors connexion** : l'application s'installe sur iPhone et Android (« Ajouter à l'écran d'accueil ») et fonctionne sans internet en mode solo.

## Structure

```
.
├── index.html              # Application (HTML, CSS et JavaScript)
├── manifest.webmanifest    # Installation sur mobile
├── sw.js                   # Service worker (cache hors connexion)
├── data/
│   └── questions.json      # Base de questions
├── assets/
│   ├── icons/              # Logo et icônes de l'application
│   ├── img/                # Photo de l'entrée du 770 (accueil)
│   └── audio/              # Musique de fond
├── .nojekyll               # Publication directe par GitHub Pages
└── README.md
```

## Format des questions

`data/questions.json` est un tableau. Chaque question est un tableau de 7 éléments :

```
[question, [réponse A, B, C, D], index de la bonne réponse (0-3), source, niveau ("1"-"4"), thème, sous-thème]
```

Les réponses sont mélangées automatiquement à l'affichage.

## Publication

Le site est publié par GitHub Pages depuis la branche `main`, à la racine du dépôt. Toute modification poussée sur `main` est en ligne en une à deux minutes.

## Ajouter des photos aux questions

1. Déposer la photo dans `assets/photos/` (format .jpg, environ 1200 px de large).
2. Ajouter une ligne dans `data/photos.json` :
   ```json
   {"file": "rabbi-farbrenguen.jpg", "keys": ["Rabbi", "farbrenguen"], "caption": "Le Rabbi lors d'un farbrenguen"}
   ```
   La photo s'affiche au-dessus de chaque question dont le texte ou la réponse contient un des mots-clés.
   Si plusieurs photos correspondent, le site alterne entre elles selon la question.
