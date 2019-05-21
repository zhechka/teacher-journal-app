import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { StudentsComponent } from './components/students/students-table/students.component';
import { SubjectsComponent } from './components/subjects/subjects-list/subjects.component';
import { SubjectTableComponent } from './components/subjects/subject-table/subject-table.component';

import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SortPipe } from './common/helpers/sort.pipe';
import { CellColorDirective } from './common/directives/cell-color.directive';
import { ButtonOrderHideDirective } from './common/directives/button-order-hide.directive';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { studentsReducer } from './redux/reducers/students.reducer';
import { reducers } from './redux/reducers/reducer.factory';

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
    SubjectFormComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
