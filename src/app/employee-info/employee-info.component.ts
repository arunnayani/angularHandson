import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee-details/Employee';
import { EmployeeService } from '../employee.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  Id: number;
  employee: Employee;
  constructor(empService: EmployeeService, private route: ActivatedRoute) {
    this.Id = 1;
    this.employee = empService.getEmployeeById(this.Id);
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('Id');
    if (id != null) {
      this.Id = Number(id) - 1;
    }
  }

  onSubmit(empForm: any): void {
    this.employee.Name = empForm.value.Name;
    this.employee.Salary = empForm.value.Salary;
  }

}
