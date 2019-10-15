import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { from } from 'rxjs';
// tslint:disable-next-line: no-unused-expression
import {EmployeeService} from '../shared/employee.service';
@Component({
  selector: 'app-epm-from',
  templateUrl: './epm-from.component.html',
  styleUrls: ['./epm-from.component.css']
})
export class EpmFromComponent implements OnInit {

  constructor(private employeeService: EmployeeService, public dialogRef: MatDialogRef<EpmFromComponent>) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.employeeService.form.controls;
  ngOnInit() {
  }
  onSubmit() {
    if (this.employeeService.form.valid) {
      if (!this.employeeService.form.get('$key').value)
        this.employeeService.insertEmployee(this.employeeService.form.value);
      else
      this.employeeService.updateEmployee(this.employeeService.form.value);
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
    this.dialogRef.close();
  }
  keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
