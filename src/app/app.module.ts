import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { EmployeeFacesComponent } from './ui/employee-faces/employee-faces.component';



@NgModule({
  declarations: [AppComponent, EmployeeFacesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

