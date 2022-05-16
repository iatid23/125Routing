import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {name: 'Max', id: 1},
     {name: 'Anna', id: 2},
      {name: 'Chris', id: 3}]; 

  constructor() { }

  ngOnInit(): void {
  }

}
