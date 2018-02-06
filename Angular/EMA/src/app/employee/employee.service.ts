import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService{

    empData;
    empCounter;
    empOldData;
    empId;

    getAllEmp(): string{
        this.getLocal();

        return this.empData;
    }

    getEmp(id): IEmployee{
        this.getLocal();

        var empList = JSON.parse(this.empData);
        var emp;
        var empIndex=0;

        for(var e of empList){
            emp = JSON.parse(e);
            if(emp.id === id){
                break;
            }
            empIndex++;
        }
        console.log(JSON.parse(empList[empIndex]));
        
        return JSON.parse(empList[empIndex]);
    }

    addEmp(data): void {
        this.getLocal();

        this.empOldData = [];     
        
        if (this.empData !== null) {
            this.empOldData = JSON.parse(this.empData);
        }

        if (this.empCounter !== null) {
            this.empId = +this.empCounter + 1;            
        } else {
            this.empId = 0;   
        }

        data.id = this.empId;
        this.empOldData.push(JSON.stringify(data));
        localStorage.setItem('employee_data',JSON.stringify(this.empOldData));
        localStorage.setItem('emp_count',this.empId);

        console.log(JSON.parse(localStorage.getItem('employee_data')));
        console.log(JSON.parse(localStorage.getItem('emp_count')));
    }

    updateEmp(olddata, newdata): void {
        this.getLocal();
        this.empOldData = JSON.parse(this.empData);
        this.empOldData[this.empOldData.indexOf(JSON.stringify(olddata))] = JSON.stringify(newdata);
        localStorage.setItem('employee_data',JSON.stringify(this.empOldData));
    }

    deleteEmp(data){
        this.getLocal();

        this.empOldData = JSON.parse(this.empData);
        this.empOldData.splice(this.empOldData.indexOf(JSON.stringify(data)),1);
        localStorage.setItem('employee_data',JSON.stringify(this.empOldData));
    }

    getLocal(){
        this.empData = localStorage.getItem('employee_data');
        this.empCounter = localStorage.getItem('emp_count');
    }
}