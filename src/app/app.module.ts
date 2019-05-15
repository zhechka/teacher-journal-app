import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects-list/subjects.component';
import { SubjectTableComponent } from './components/subjects/subject-table/subject-table.component';

import { SharedModule } from './shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SortPipe } from './common/helpers/sort.pipe';
import { CellColorDirective } from './common/directives/cell-color.directive';
import { ButtonOrderHideDirective } from './common/directives/button-order-hide.directive';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    StatisticsComponent,
    ExportComponent,
    SortPipe,
    CellColorDirective,
    ButtonOrderHideDirective,
    SubjectTableComponent,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
