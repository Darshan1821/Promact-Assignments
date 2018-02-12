import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  pageTitle = 'Registration Form';
  qualifications: string[];
  experiences: string[];
  empData: IEmployee;
  id: number;

  constructor(private route: ActivatedRoute, 
              private empService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.qualifications = ['B Tech.', 'M Tech.', 'Other'];
    this.experiences = ['1 Year', '2 Year', 'More than 2'];
    this.route.params.subscribe(params => { this.id = +params['id'] });
    this.check(this.id);
  }

  check(id) {
    if (id !== -1) {
      this.pageTitle = 'Update Employee';
      this.empData = this.empService.getEmp(id);
    } else {
      this.empData = new Employee();
    }
  }

  saveEmp() {
    if (this.id === -1) {
      this.empService.addEmp(this.empData);
    } else {
      this.empService.updateEmp(this.empService.getEmp(+this.id), this.empData);
    }
    this.router.navigate(['/employees']);
  }
}
