import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee-details/Employee';
import { Department } from '../employee-details/Department';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  
  employee: Employee;
  departments: Department[];
  constructor() {
    this.employee = {
      Id: 0,
      Name: "",
      Salary: 0,
      Permanent: false,
      Department: { Id: 0, Name: "" },
      Skills: [],
      DoB: new Date()
    };
    this.departments = [

      { Id: 1, Name: "Payroll" },

      { Id: 2, Name: "Internal" },

      { Id: 3, Name: "HR" }

    ];
  }

  onSubmit(empForm: any): void {
    this.employee.Name = empForm.value.Name;
    this.employee.Salary = empForm.value.Salary;
    this.employee.Permanent = empForm.value.Permanent;
    var obj = this.departments.find(i => i.Id == empForm.value.Department);
    if (obj != null) {
      this.employee.Department = obj;
    }
  }
  ngOnInit(): void {
  }

}
