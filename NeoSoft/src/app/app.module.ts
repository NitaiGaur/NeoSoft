import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EpmFromComponent } from './epm-from/epm-from.component';
import { EpmListComponent } from './epm-list/epm-list.component';
import {EmployeeService} from './shared/employee.service';
import { from } from 'rxjs';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    EpmFromComponent,
    EpmListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
   BrowserAnimationsModule,
   MaterialModule,
   HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [EpmFromComponent]
})
export class AppModule { }
