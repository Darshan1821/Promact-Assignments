import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit, AfterViewInit {

  pageTitle = 'Registration Form';
  qualifications: string[];
  experiences: string[];
  languages: string[];
  empData: IEmployee;
  lang: string[];
  id: number;

  constructor(private route: ActivatedRoute, 
              private empService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.qualifications = ['B Tech.', 'M Tech.', 'Other'];
    this.experiences = ['1 Year', '2 Year', 'More than 2'];
    this.languages = ['C/C++', 'Java', 'C#', 'PHP', 'Python'];
    this.lang = [];
    this.route.params.subscribe(params => { this.id = +params['id'] });
    this.check(this.id);
    console.log(this.id);
  }

  ngAfterViewInit() {
    for (let l of this.lang) {
      var check = <HTMLInputElement>document.getElementById(l);
      check.checked = true;
    }
  }

  check(id) {
    if (id !== -1) {
      this.pageTitle = 'Update Employee';
      this.empData = this.empService.getEmp(id);
      this.lang = this.empData.lang.split(',');
    } else {
      this.empData = new Employee();
      this.lang = [];
    }
  }

  saveEmp() {
    this.empData.lang = this.lang.toString();
    this.lang.splice(0, this.lang.length);
    if (this.id === -1) {
      this.empService.addEmp(this.empData);
    } else {
      this.empService.updateEmp(this.empService.getEmp(+this.id), this.empData);
    }
    this.router.navigate(['/employees']);
  }

  onChanged(lang: string, isChecked: boolean) {
    if (isChecked) {
      this.lang.push(lang);
    } else {
      this.lang.splice(this.lang.indexOf(lang), 1);
    }
  }
}
