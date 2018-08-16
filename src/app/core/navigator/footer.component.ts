import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div class="content has-text-centered">
      <p>
        <strong>Autobot.</strong><i>-A simple Angular project for playing with cars... while learning Angular ;-)</i>.
      </p>
      <p>
        <small>By <a href="https://twitter.com/albertobasalo">Alberto Basalo</a></small>
      </p>
    </div>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
