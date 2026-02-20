import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { Forgot } from './pages/forgot/forgot';


export const routes: Routes = [
    { path: '', component: Home },
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {path: 'forgot', component: Forgot},
];
