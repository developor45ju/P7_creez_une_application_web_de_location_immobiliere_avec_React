const fs = require('fs');
const path = require('path');

// Déterminez l'environnement (développement ou production)
const environment = process.env.NODE_ENV || 'development'; // Par défaut : développement

// URLs pour chaque environnement
const urls = {
  development: 'https://developor45ju.github.io/kasa-oc-p7/', // Remplacez par votre URL GitHub Pages
  production: 'https://agence-kasa.netlify.app/' // Remplacez par votre URL Netlify
};

// Chemin vers votre fichier package.json
const packageJsonPath = path.resolve(__dirname, 'package.json');

// Lisez le contenu du fichier package.json
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Mettez à jour l'URL de la homepage en fonction de l'environnement
packageJson.homepage = urls[environment];

// Écrivez les modifications dans le fichier package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`URL de la homepage mise à jour pour l'environnement ${environment} : ${packageJson.homepage}`);
