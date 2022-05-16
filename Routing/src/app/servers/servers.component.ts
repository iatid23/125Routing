import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Array<{name:string, status:string}> = [
    {name: 'Productionserver', status: 'Online'},
     {name: 'Testserver', status: 'Offline'},
      {name: 'Devserver', status: 'Online'}]; 


  constructor() { }

  ngOnInit(): void {
  }

}
