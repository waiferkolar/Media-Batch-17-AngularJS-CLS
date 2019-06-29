import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../user/login/login.component';
import {RegisterComponent} from '../user/register/register.component';
import {AdminComponent} from '../admin/admin.component';
import {AdminHomeComponent} from '../admin/admin-home/admin-home.component';

const BMROUTE: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: AdminHomeComponent},
    ]
  }
];

export const BM_ROUTE = RouterModule.forRoot(BMROUTE);
