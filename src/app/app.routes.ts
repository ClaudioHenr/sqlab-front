import { Routes } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { StudentExerciceComponent } from './pages/student/student-exercice/student-exercice.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { MainLayoutComponent } from './layouts/student-layout/main-layout.component';
import { StudentHomeComponent } from './pages/student/student-home/student-home.component';
import { ProfessorHomeComponent } from './pages/professor/professor-home/professor-home.component';
import { ProfessorManagementComponent } from './pages/professor/professor-management/professor-management.component';
import { ProfessorGradeComponent } from './pages/professor/grade/professor-grade/professor-grade.component';
import { ProfessorGradeCreateComponent } from './pages/professor/grade/professor-grade-create/professor-grade-create.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
    },

    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'signup', component: SignupComponent },
            { path: 'signin', component: SigninComponent }
        ]
    },

    {
        path: 'home',
        loadComponent: () =>
          import('./home/professor-home.component').then(m => m.ProfessorHomeComponent)
    },

    {
        path: 'professor',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProfessorHomeComponent }
        ]
    },

    {
        path: 'student',
        component: MainLayoutComponent,
        // ADICIONAR GUARDS
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // CASO /student/ -> REDIRECIONA PARA /home
            { path: 'home', component: StudentHomeComponent,
                children: [
                    { path: 'create', component: StudentCreateComponent },
                    { path: 'list', component: StudentListComponent },
                    { path: 'exercice', component: StudentExerciceComponent }
                ]
             },
        ]
    },

    {
        path: '**',
        redirectTo: '/auth/signin' // ADICIONAR PÁGINA DE ERRO
    }
];
