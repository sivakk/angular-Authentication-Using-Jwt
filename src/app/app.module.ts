import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { StudentbuilderComponent } from './studentbuilder/studentbuilder.component';
import { AppRoutingModule } from "./app-routing.module";
import { StudentBuilderComponent } from './student-builder/student-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentbuilderComponent,
    StudentBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
