import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from '../../model/person.model';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _EmployeeService: EmployeeService) {}

  data$: Observable<PersonModel[] | null> = this._EmployeeService.getAll();

  remove(id: string) {
    this._EmployeeService.delete(id).subscribe();
    return window.alert('Employee was successfully removed! :)');
  }
}
