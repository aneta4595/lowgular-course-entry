import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
  });

  constructor(private _employeeService: EmployeeService) {}

  onButtonClicked(form: {
    name: string;
    surname: string;
    age: string;
    phone_number: string;
  }) {
    alert(
      'New employee: ' +
        form.name +
        ' ' +
        form.surname +
        ' was successfully added!'
    );
  }
  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService
      .create({
        name: form.name,
        surname: form.surname,
        age: form.age,
        phone_number: form.phone_number,
      })
      .subscribe();
    alert(
      'New employee: ' +
        form.name +
        ' ' +
        form.surname +
        ' was successfully added!'
    );
  }
}
