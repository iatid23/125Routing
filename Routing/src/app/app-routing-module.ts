import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent }, //localhost:4200/users
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    // { path: 'users/1', component: UsersComponent },
    // { path: 'users/2', component: UsersComponent }, better add peremeters =>
    
    { 
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
           component: ServersComponent,
            children: [
                { path: ':id/edit', component: EditServerComponent }, 
                { path: ':id', component: ServerComponent }
                ] },
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' } //wild card - catch all you dont know  -  must be last in this list
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),

    ],
    exports: [RouterModule]

})
export class AppRoutingModule{

}