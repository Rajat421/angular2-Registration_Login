/**
 * Created by consultadd on 1/8/16.
 */
import {Component} from "@angular/core"
import {User} from './user'
import {user} from './mock_User'
import { NgForm }    from '@angular/common';



@Component({
    selector: 'my-register',
    templateUrl:"app/register.html"
})
export class RegisterComponent {
model :User
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
