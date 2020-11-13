import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
        {
            path: 'login',
            loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
        },
        {
            path: 'register',
            loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
        },
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
