import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects-list/subjects.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { SubjectTableComponent } from './components/subjects/subject-table/subject-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/:name', component: SubjectTableComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'export', component: ExportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
