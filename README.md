# Template de projet

Ceci est un template de projet basé sur les technologies JavaScript afin de réaliser une <a href="https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps">PWA</a> rapidement administrée par un serveur <a href="https://nodejs.org/fr/docs/guides/getting-started-guide/">NodeJS</a>.


## Technologies utilisées

Côté serveur : 

- NodeJS (Serveur)
- WebPack (Package les ressources)
- WebpackHtml Plugin

Côté client :

- Bootstrap (CSS)
- JQuery (Couplé à Bootstrap et permet une gestion facilité du DOM)
- VueJS (Application single page)
- Workbox

## Documentation diverses pour comprendre les technologies utilisées

- Documentation de Webpack : https://webpack.js.org/guides/development#using-watch-mode

- Documentation du plugin générant le Manifest : https://www.npmjs.com/package/webpack-manifest-plugin

- Documentation du plugin permettant de généré le Service Worker : https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin

- Documentation du plugin générant le fichier index.html dans le dossier Dist : https://github.com/jantimon/html-webpack-plugin