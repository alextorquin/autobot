# 0-hello

## 0.1 Generación automática

La generación de proyectos puede automatizarse con scripts como este.

```bash
script_dir=$(dirname "$0")
user_dir=$(pwd)
echo "---> Repo will be created at $user_dir"
repo_name='autobot'
repo_dir=$user_dir/$repo_name
echo "---> Cleaning $repo_dir"
rm -rf $repo_dir
echo "---> Generating $repo_name"
ng new $repo_name -s -S -t
echo "---> Created Repo at $repo_dir"
echo "---> Configuring prettier"
# To Do: plantillas pendientes de publicar
#cp $script_dir/temp/prettier.config.js $repo_dir/prettier.config.js
#cp $script_dir/temp/tslint.json $repo_dir/tslint.json
echo "---> Configuring npm scripts" 
sed -i -e 's/ng serve/ng serve -o/g' $repo_dir/package.json
sed -i -e 's/ng build/ng build --prod/g' $repo_dir/package.json
echo "---> Installing npm dependecies" 
cd $repo_dir
npm i bulma font-awesome moment
npm i compodoc -g 
npm i webpack-bundle-analyzer -D
echo "---> Opening editor"
code .
echo "---> Starting"
npm start
```

## 0.2 Configuración manual

Scripts en `package.json`

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve -o --port 4203",
    "build": "ng build --prod --stats-json",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "doc": "compodoc -p src/tsconfig.app.json -s",
    "stats": "webpack-bundle-analyzer dist/autobot/stats.json"
  }
}
```

Estilos en `angular.json`

```json
{
  "styles": [
    "node_modules/bulma/css/bulma.min.css",
    "node_modules/font-awesome/css/font-awesome.css",
    "src/styles.css"
  ]
}
```

Metadata en `index.html`

```html
  <meta name="description"
        content="A simple Angular project for playing with cars ;-)">
  <meta name="keywords"
        content="Angular Sample Tutorial Ejemplo">
  <meta name="author"
        content="Alberto Basalo">
```


## 0.3 Ejecución y despliegue

```bash
npm run doc
npm run build
npm run stats
```
