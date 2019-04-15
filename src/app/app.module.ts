import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { ButtonsComponent } from './components/panel/buttons/buttons.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, StudentsComponent, SubjectsComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
