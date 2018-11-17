import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthBlocksComponent } from './auth-blocks.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AuthBlocksComponent],
  exports: [AuthBlocksComponent]
})
export class AuthBlocksModule {}
