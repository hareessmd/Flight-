import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.css']
})
export class ConfirmbookingComponent implements OnInit {
  gender = ['','Male','Female','others'];
  constructor() { }

  ngOnInit(): void {
  }

}
