import { NgModule } from '@angular/core';
import { EmployeeEditComponent } from './employee-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';

@NgModule({
    imports:[
        FormsModule,
        BrowserModule,
        RouterModule.forChild([
            {
                path: 'employees',
                children:[
                    {
                        path: '',
                        component: EmployeeListComponent
                    },
                    {
                        path: ':id',
                        component: EmployeeDetailsComponent
                    },
                    {
                        path: ':id/edit',
                        component: EmployeeEditComponent
                    }
                ]
            }
        ])
    ],
    declarations:[
        EmployeeEditComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent,
    ],
    providers: [ EmployeeService ] 
})
export class EmployeeModule {
}