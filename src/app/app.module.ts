import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { ButtonsComponent } from './components/panel/buttons/buttons.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, StudentsComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
