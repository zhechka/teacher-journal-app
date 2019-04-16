import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [ButtonComponent, FormComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, FormComponent]
})
export class SharedModule {}
