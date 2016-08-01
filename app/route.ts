/**
 * Created by consultadd on 1/8/16.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";



const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'

    },

];

export const appRouterProviders = [
    provideRouter(routes)
];