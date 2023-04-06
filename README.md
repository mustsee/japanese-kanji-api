# Japanese Kanji Static API

## Méthodes

Le livre **Les kanjis dans la tête** d'*Yes Maniette*, adapté de **Remembering the kanji** de *James W. Heisig*.  

La chaîne YouTube [Cours de japonais !](https://www.youtube.com/@coursdejaponais) de *Julien Fontanier*.

## Structure du Projet

À l'intérieur du projet, vous trouverez les dossiers et les fichiers suivants:

```
/
├── src/
│   ├── data/
│   │   └── decks.js
│   │   └── kanji.js
│   ├── pages/v1/
│   │   │   ├── decks/
│   │   │   │   └── list.json.js
│   │   │   │   ├── cdj/
│   │   │   │   │   └── [...].json.js
│   │   │   │   ├── rtk/
│   │   │   │   │   └── [id].json.js
│   │   │   ├── kanji/
│   │   │   │   └── [id].json.js
```

Les kanji se trouvent dans le fichier `kanji.js` situé dans le dossier `data/`. La liste est en constante évolution, et pour le moment incomplète.

À partir de ces kanji, on peut construire les *decks* que l'on souhaite. On retrouve les informations concernant ces *decks* dans le fichier `decks.js` du dossier `data/`.

## REST API

Comme c'est une API statique, il est seulement possible de recevoir des données (GET), et il est donc impossible de réaliser une autre action (POST, PATCH, PUT, DELETE).

Le dossier `pages/v1/` abrite la première version (et pour l'instant unique) de l'API.

Pour accéder à l'API, l'URL de base est la suivante `https://www.mustsee.github.io/japanese-kanji-static-api/v1`.

### Recevoir les données d'un kanji 

`GET /kanji/[kanji].json`

    https://mustsee.github.io/japanese-kanji-static-api/v1/kanji/百.json

### Recevoir la liste des decks

`GET /decks/list.json`

    https://mustsee.github.io/japanese-kanji-static-api/v1/decks/list.json


### Recevoir les kanji d'un deck RTK

`GET /decks/rtk/[id].json`

    https://mustsee.github.io/japanese-kanji-static-api/v1/decks/rtk/premieres-impressions.json

### Recevoir les kanji d'un deck CDJ

`GET /decks/cdj/[id].json`

    https://mustsee.github.io/japanese-kanji-static-api/v1/decks/cdj/nombres.json


## Astro

L'API statique a été développé avec le framework Astro. Vous pouvez consulter [la documentation](https://docs.astro.build)