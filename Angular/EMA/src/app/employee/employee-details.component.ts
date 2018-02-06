import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  emp: IEmployee;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
      { this.emp = this.employeeService.getEmp(+params['id']); });  
  }
}
