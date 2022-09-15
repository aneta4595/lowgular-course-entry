import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  constructor(private _employeeService: EmployeeService) {}

  onButtonClicked(form: { name: string; age: string; salary: string }) {
    alert(
      'User was successfully added to thedatabase. ' +
        'Name:' +
        form.name +
        ', Age:' +
        form.age +
        ', Salary:' +
        form.salary
    );
  }
  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService
      .create({ name: form.name, age: form.age, salary: form.salary })
      .subscribe();
    return window.alert(
      'Name:' + form.name + ', Age:' + form.age + ', Salary:' + form.salary
    );
  }
}
