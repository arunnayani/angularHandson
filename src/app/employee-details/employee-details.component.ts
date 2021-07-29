import { Component, OnInit } from '@angular/core';
import { Department } from './Department';
import { Skill } from './Skills';
import { Employee } from './Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Employees: Employee[];
  constructor(empService: EmployeeService) { 
    this.Employees = empService.getAllEmployees();
  }

  ngOnInit(): void {
  }

}
