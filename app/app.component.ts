/**
 * Created by consultadd on 1/8/16.
 */
import {Component} from "@angular/core"
import {User} from './user'
import {user} from './mock_User'



@Component({
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <nav><ul>
                <li>SignIn</li>
                <li>SignUp</li>
          </ul></nav>
           <ul><li *ngFor="let USER of User"><span>{{USER.UserName}}</span></li></ul>
         
               
`
})
export class AppComponent {
       title :String = "Registration"
        User : User[] = user


