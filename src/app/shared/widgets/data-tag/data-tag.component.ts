import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/core/store/models/tag.model';

@Component({
  selector: 'app-data-tag',
  templateUrl: './data-tag.component.html',
  styles: []
})
export class DataTagComponent implements OnInit {
  @Input()
  public tag: Tag;

  constructor() {}

  ngOnInit() {}
}
