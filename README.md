1. Introduction (Simple + Utile)

TypeScript = JavaScript + système de types.

Avantages :

- moins d’erreurs,

- auto-complétion plus intelligente,

- code plus clair et maintenable,

idéal pour Angular, NestJS, React, Node.js.

2. Installation et Mise en place d’un projet

✔️ Installation

npm init -y

npm install --save-dev typescript ts-node ts-node-dev

npx tsc --init

✔️ Structure recommandée

project/
  src/
    index.ts
  tsconfig.json

✔️ Lancer un fichier TS sans compiler

npx ts-node src/index.ts
