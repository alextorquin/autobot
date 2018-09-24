import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './widgets/card/card.component';
import { DataTagComponent } from './widgets/data-tag/data-tag.component';
import { MenuListComponent } from './widgets/menu-list/menu-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [CardComponent, DataTagComponent, MenuListComponent],
  exports: [CardComponent, DataTagComponent, ReactiveFormsModule, MenuListComponent]
})
export class SharedModule {}
