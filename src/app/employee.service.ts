import { Injectable } from '@angular/core';
import { Employee } from './employee-details/Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];
  constructor() {
    this.employees = [
      {
        Id: 1, Name: "Arun", Salary: 50000, Permanent: true,
        Department: { Id: 5, Name: "IT" },
        Skills: [{ Id: 3, Name: "Linux" }, { Id: 4, Name: "C#" }],
        DoB: new Date("05/23/1999")
      },
      {
        Id: 2, Name: "Uday", Salary: 30000, Permanent: false,
        Department: { Id: 4, Name: "Sales" },
        Skills: [{ Id: 1, Name: "C" }, { Id: 2, Name: "C++" }],
        DoB: new Date("08/15/1999")
      },
      {
        Id: 3, Name: "Sanvika", Salary: 25000, Permanent: false,
        Department: { Id: 1, Name: "IT" },
        Skills: [{ Id: 3, Name: "Java" }, { Id: 4, Name: "C#" }],
        DoB: new Date("05/18/1999")
      },
      {
        Id: 4, Name: "Prathyusha", Salary: 70000, Permanent: false,
        Department: { Id: 2, Name: "Sales" },
        Skills: [{ Id: 3, Name: "Java" }, { Id: 4, Name: "C#" }],
        DoB: new Date("02/13/1994")
      }
    ]
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(Id: number): Employee {
    let obj = this.employees.find(i => i.Id === Id);
    if (obj != null) {
      return obj;
    }
    obj = {
      Id: 0, Name: "", Salary: 0, Permanent: false,
      Department: { Id: 0, Name: "" },
      Skills: [{ Id: 0, Name: "" }],
      DoB: new Date("")
    }
    return obj;
  }
}
