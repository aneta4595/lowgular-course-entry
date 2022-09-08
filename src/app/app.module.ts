import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeFacesComponent } from './ui/employee-faces/employee-faces.component';
import { EmployeeServiceModule } from './services/employee.service-module';
import { ProjectListComponentModule } from './ui/project-list/project-list.component-module';
import { ProjectServiceModule } from './services/project.service-module';
import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [AppComponent, EmployeeFacesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    ProjectServiceModule,
    EmployeeListComponentModule,
    ProjectListComponentModule,
  ],
  providers: [EmployeeService, ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
