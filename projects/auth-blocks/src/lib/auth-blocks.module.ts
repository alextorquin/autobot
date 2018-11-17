import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthBlocksComponent } from './auth-blocks.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthBlocksComponent],
  exports: [AuthBlocksComponent]
})
export class AuthBlocksModule {}
