import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  city=['','Kurnool','Hyderabad','Chennai','Banglore','Delhi','Mumbai'];
  count=['one','two','three'];


  constructor() { }

  ngOnInit(): void {
  }

}
