import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  bool: boolean;
  Count1: number;
  Count2: number;
  constructor() {
    this.bool = true;
    this.Count1 = 0;
    this.Count2 = 0;
  }

  onClick() {
    this.bool = !this.bool;
  }
  Add1() {
    this.Count1++;
  }
  Add2() {
    this.Count2++;
  }
  Sub() {
    this.Count2--;
  }

  ngOnInit(): void {
  }

}
