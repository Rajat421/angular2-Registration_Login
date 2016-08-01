/**
 * Created by consultadd on 1/8/16.
 */
import {Component} from "@angular/core"
import {User} from './user'
import {user} from './mock_User'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
     <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/login']" routerLinkActive="active">SignIn</a>
    <a [routerLink]="['/register']" routerLinkActive="active">SignUp</a>
    </nav>
     <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title:String = "Registration";
    User:User[] = user;

}
