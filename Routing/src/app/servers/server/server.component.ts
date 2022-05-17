import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router: Router
    
    ) {
      
    }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; /// + making casting to number
    this.server = this.serverService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serverService.getServer(+params['id']); /// + making casting to number

      }
    );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

  }
 

  

}
