import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponentModule } from '../employee-details/employee-details.component-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, EmployeeDetailsComponentModule, RouterModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent],
})
export class EmployeeListComponentModule {}
