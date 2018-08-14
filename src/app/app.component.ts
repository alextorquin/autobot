import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title">
        Bienvenido a {{title}}!
      </h1>
      <h2 class="subtitle">
        Versión: {{subtitle}}
      </h2>
      <a target="_blank" rel="noopener" href="https://academia-binaria.com/">
        <img width="300" src="./assets/logo.png">
      </a>
      </div>
    </header>
    <main class="container">
      <h2>Enlaces para empezar: </h2>
      <ul>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://academia-binaria.com/hola-angular-cli/">Tutorial</a></h2>
        </li>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://github.com/AcademiaBinaria/autobot/tree/0-hello">Repositorio</a></h2>
        </li>
        <li>
          <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
        </li>
      </ul>
    </main>
    <footer>
    <div class="content has-text-centered">
      <p>
        <strong>Autobot</strong> by <a href="https://twitter.com/albertobasalo">Alberto Basalo</a>.
      </p>
      <p>
        <small>
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </small>
      </p>
    </div>
  </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'autobot ';
  subtitle = '0-hello';
}
