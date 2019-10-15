import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  customerList: any;

  constructor(private firebase: AngularFireDatabase, private http: HttpClient) { }
  empList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    desgn: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      desgn: '',
      salary: ''
    });
  }
  getEmployee() {
    this.empList = this.firebase.list('employee');
    return this.empList.snapshotChanges();
  }

  insertEmployee(empplyee) {
    this.empList.push({
      fullName: empplyee.fullName,
      desgn: empplyee.desgn,
      salary: empplyee.salary,
    });
  }
  populateForm(employee) {
    this.form.setValue(employee);
  }
  updateEmployee(employee) {
    this.empList.update(employee.$key,
      {
        fullName: employee.fullName,
        desgn: employee.desgn,
        salary: employee.salary
      });
  }
  deleteEpmloyee($key: string) {
    this.empList.remove($key);
  }
}
