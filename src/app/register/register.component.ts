import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries: any = [ 'India', 'USA', 'UK', 'Australia', 'Africa'];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert("Successfully Registered");
  }

}


