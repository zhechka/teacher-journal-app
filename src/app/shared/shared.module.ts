import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule],
  exports: [FormComponent]
})
export class SharedModule {}
