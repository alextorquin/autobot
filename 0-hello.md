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

### 0.2.1 Scripts en `package.json`

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve -o --port 4203",
    "build": "ng build --prod --stats-json",
    "gh": "ng build --prod --output-path docs --base-href https://academiabinaria.github.io/autobot/",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "doc": "compodoc -p src/tsconfig.app.json -s",
    "stats": "webpack-bundle-analyzer dist/autobot/stats.json"
  }
}
```

### 0.2.2 Estilos en `angular.json`

```json
{
  "styles": [
    "node_modules/bulma/css/bulma.min.css",
    "node_modules/font-awesome/css/font-awesome.css",
    "src/styles.css"
  ]
}
```

### 0.2.3 Metadata en `index.html` y copia en `404.html`

```html
  <title>AutoBot 0-hello</title>
  <meta name="description"
        content="A simple Angular project for playing with cars ;-)">
  <meta name="keywords"
        content="Angular Sample Tutorial Ejemplo">
  <meta name="author"
        content="Alberto Basalo">
```

### 0.2.4 Contenido en la plantilla *html* de `app.component.ts`

```html
    <header class="hero">
      <div class="hero-body has-text-centered">
        <h1 class="title">
          Bienvenido a {{title}}!
        </h1>
        <h2 class="subtitle">
          Versión: {{subtitle}}
        </h2>
        <a target="_blank" rel="noopener" href="https://academia-binaria.com/">
          <img width="100" src="./assets/logo.png">
        </a>
      </div>
    </header>
    <main class="section">
      <div class="container">
        <h2 class="title">Links to learn Angular: </h2>
        <ul>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://academia-binaria.com/hola-angular-cli/">Tutorial en español</a></h2>
          </li>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://github.com/AcademiaBinaria/autobot/tree/0-hello">GitHub Repository</a></h2>
          </li>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div class="content has-text-centered">
        <p>
          <strong>Autobot.</strong><i>-A simple Angular project for playing with cars ;-)</i> by <a href="https://twitter.com/albertobasalo">Alberto Basalo</a>.
        </p>
        <p>
          <small>
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </small>
        </p>
      </div>
    </footer>
```

### 0.2.5 Contenido en el código 
```typescript
  title = 'autobot';
  subtitle = '0-hello';
```

## 0.3 Ejecución y despliegue

```bash
npm run doc
npm run build
npm run stats
npm run gh
```
