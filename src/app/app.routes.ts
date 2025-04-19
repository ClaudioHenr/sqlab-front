import { Routes } from '@angular/router';
import { SignupComponent } from './pages/authentication/signup/signup.component';
import { SelfRegistrationComponent } from './register/professor/self-registration/self-registration.component';
import { RegistrationComponent } from './register/student/registration/registration.component';

export const routes: Routes = [
    {
        path: "",
        component: SignupComponent
    },
    {
        path: 'register/professor',
        component: SelfRegistrationComponent
    },
    {
        path: 'register/student',
        component : RegistrationComponent
    }
];
