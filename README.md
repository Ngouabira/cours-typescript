1 — Introduction & pourquoi apprendre TypeScript

TypeScript est un sur-ensemble typé de JavaScript qui compile en JavaScript. Il ajoute des types statiques (optionnels) et des outils de vérification qui aident à attraper des erreurs tôt, améliorer l’autocomplétion et rendre le code plus maintenable. Voir la page d’accueil et le Handbook officiels. 
TypeScript
+1

2 — Prérequis

Connaissances de base en JavaScript (ES6+ recommandé).

Node.js et npm/yarn installés.

Un éditeur (VS Code recommandé) avec l’extension TypeScript/TS Server.

Optionnel : notion de compilation/transpilation, modules ES.

3 — Installation et premier projet (pas à pas)

Installer TypeScript globalement (optionnel) ou en dépendance projet :

# global
npm install -g typescript

# local (recommandé)
npm init -y
npm install --save-dev typescript


Initialiser un tsconfig.json :

npx tsc --init


Structure minimale :

project/
  src/
    index.ts
  tsconfig.json
  package.json


Compiler :

npx tsc    # compile selon tsconfig.json
node dist/index.js


Pour développement rapide : ts-node ou ts-node-dev.

npm install --save-dev ts-node ts-node-dev
npx ts-node src/index.ts


(La documentation officielle détaille ces étapes et options). 
TypeScript
+1
