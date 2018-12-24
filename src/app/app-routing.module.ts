

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
    // {
    //     path: 'studentbuilder',
    //     loadChildren: 'app/studentbuilder/studentbuilder.module#StudentbuilderModule'
    // },

    {
        path: '**',
        redirectTo: 'studentbuilder'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
