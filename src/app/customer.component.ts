import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
templateUrl:'./customers.component.html'
})
export class CustomersComponent implements OnInit {
title:string
people:any[]

    constructor() {}

    ngOnInit(){
  this.title ='Customers';
  this.people =[
      {id:1 ,name:'john doe',city:'Kisumu'}
      {id:1 ,name:'john doe',city:'Kisumu'}
      {id:1 ,name:'john doe',city:'Kisumu'}
  ];
}
}
