import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentbuilderComponent } from "./studentbuilder.component";

const routes: Routes = [{
  path: '',
  component: StudentbuilderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentbuilderRoutingModule { }
