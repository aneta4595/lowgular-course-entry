import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PersonModel[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
          return response.data.map((EmployeeResponse: EmployeeResponse) => {
            return {
              name: EmployeeResponse.employee_name,
              id: EmployeeResponse.id,
              email: '',
              image: EmployeeResponse.profile_image,
              salary: EmployeeResponse.employee_salary,
              age: EmployeeResponse.employee_age,
            };
          });
        })
      );
  }

  delete(id: string): Observable<void> {
    return this._httpClient
      .delete('https://dummy.restapiexample.com/api/v1/delete/' + id)
      .pipe(map((_) => void 0));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient
      .post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map((_) => void 0));
  }

  getOne(id: string): Observable<PersonModel> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse>>(
        'https://dummy.restapiexample.com/api/v1/employee/' + id
      )
      .pipe(
        map(
          (response): PersonModel => ({
            id: response.data.id,
            name: response.data.employee_name,
            age: response.data.employee_age,
            email: '',
            salary: response.data.employee_salary,
            image: response.data.profile_image,
          })
        )
      );
  }
}
