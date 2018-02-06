import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'ema-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  pageTitle = 'Employee List';
  employees: IEmployee[];
  filteredEmployees: IEmployee[];
  empList;
  delConfirm;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.listFilter = '';
    this.empList = JSON.parse(this.employeeService.getAllEmp());
    this.employees = [];

    if (this.empList != null) {
      for (let emp of this.empList) {
        this.employees.push(JSON.parse(emp));
      }
    }
    this.filteredEmployees = this.employees;
  }

  deleteEmp(id) {
    this.delConfirm = confirm('Are you sure you want to delete this record?');

    if (this.delConfirm) {
      this.employeeService.deleteEmp(this.employeeService.getEmp(+id));
      window.location.reload(true);
    }
  }

  performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
      employee.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
