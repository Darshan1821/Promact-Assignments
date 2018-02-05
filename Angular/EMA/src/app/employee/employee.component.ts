import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'ema-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  pageTitle = 'Registration Form';
  qualifications: string[];
  experiences: string[];
  languages: string[];
  empData;
  lang: string[];
  constructor() { }

  ngOnInit() {
    this.qualifications = ['B Tech.', 'M Tech.', 'Other'];
    this.experiences = ['1 Year', '2 Year', 'More than 2'];
    this.languages = ['C/C++', 'Java', 'C#', 'PHP', 'Python'];
    this.lang = [];
    this.empData = new Employee();
  }

  getEmp() {
    this.empData.lang = this.lang.toString();
    this.printData(JSON.parse(JSON.stringify(this.empData)));
    this.lang.splice(0, this.lang.length);
    window.location.reload(true);
  }

  onChange(lang: string, isChecked: boolean) {
    if (isChecked) {
      this.lang.push(lang);
    } else {
      this.lang.splice(this.lang.indexOf(lang), 1);
    }
  }

  printData(emp): void {
    console.log('Form Data:\n' +
                'First Name: ' + emp.firstName +
                '\nLast Name: ' + emp.lastName +
                '\nUser Email: ' + emp.userEmail +
                '\nContact No: ' + emp.contactNo +
                '\nUser Address: ' + emp.userAddress +
                '\nUser Name: ' + emp.userName +
                '\nUser Password: ' + emp.userPass +
                '\nUser Gender: ' + emp.gender +
                '\nQualification: ' + emp.qualification +
                '\nExperience: ' + emp.experience +
                '\nLanguages: ' + emp.lang );
  }
}
