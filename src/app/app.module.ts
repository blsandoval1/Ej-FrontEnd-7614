import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoMainComponent } from './alumno-main/alumno-main.component';
import { AlumnoListComponent } from './alumno-main/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './alumno-main/alumno-form/alumno-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoMainComponent,
    AlumnoListComponent,
    AlumnoFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
