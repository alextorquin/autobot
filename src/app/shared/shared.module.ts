import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './widgets/card/card.component';
import { DataTagComponent } from './widgets/data-tag/data-tag.component';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CardComponent, DataTagComponent],
  exports: [CardComponent, DataTagComponent, FormsModule]
})
export class SharedModule {}
