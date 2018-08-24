import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  template: `
  <div class="card">
  <header class="card-header">
    <div class="card-header-title">
      {{ carId }}
    </div>
    <a [routerLink]="['/']"  aria-label="home"> <-   </a>
  </header>
  <div class="card-content">
    <div class="content">
      Current speed : 0 km/h
      Traveled : 0 km
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Brake</a>
    <a href="#" class="card-footer-item">Throttle</a>
  </footer>
</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  public carId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.carId = this.route.snapshot.params['carId'];
  }
}
