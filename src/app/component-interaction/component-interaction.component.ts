import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-details/Employee';
import { FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  
  employees: Employee[];
  filtered: Employee[];
  search: string;
  constructor(private empService: EmployeeService) {
    this.search = "";
    this.employees = empService.getAllEmployees();
    this.filtered = this.employees;
  }

  ngOnInit(): void {
  }

}
