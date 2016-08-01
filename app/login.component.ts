/**
 * Created by consultadd on 1/8/16.
 */
import {Component} from "@angular/core"
import {User} from './user'
import {user} from './mock_User'



@Component({
    selector: 'my-login',
    templateUrl:"app/login.html"
})
export class LoginComponent {
model :User= new User();

}
