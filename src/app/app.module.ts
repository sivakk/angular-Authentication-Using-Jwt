import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatIconModule, MatHint } from '@angular/material';
import { AppComponent } from './app.component';
import { StudentbuilderComponent } from './studentbuilder/studentbuilder.component';
import { AppRoutingModule } from "./app-routing.module";
import { StudentBuilderComponent } from './student-builder/student-builder.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    StudentbuilderComponent,
    StudentBuilderComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    HttpModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
