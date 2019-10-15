import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EpmFromComponent } from '../epm-from/epm-from.component';

@Component({
  selector: 'app-epm-list',
  templateUrl: './epm-list.component.html',
  styleUrls: ['./epm-list.component.css']
})
export class EpmListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }
  employeeArray = [];
  showDeletedMessage: boolean;
  searchKey: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'desgn', 'salary', 'action' ];


  ngOnInit() {
    this.employeeService.getEmployee().subscribe(
      list => {
        const array = list.map(item => {
         return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.employeeService.deleteEpmloyee($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.employeeService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(EpmFromComponent, dialogConfig);
  }
  onEdit(row) {
    this.employeeService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(EpmFromComponent, dialogConfig);
  }
}
