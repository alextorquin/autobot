import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travel-manager',
  templateUrl: './travel-manager.component.html',
  styles: []
})
export class TravelManagerComponent implements OnInit {
  @Output()
  public save = new EventEmitter<void>();
  @Output()
  public delete = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
