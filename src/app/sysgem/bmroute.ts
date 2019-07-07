import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../user/login/login.component';
import {RegisterComponent} from '../user/register/register.component';
import {AdminComponent} from '../admin/admin.component';
import {AdminHomeComponent} from '../admin/admin-home/admin-home.component';
import {PostCreateComponent} from '../admin/post-create/post-create.component';
import {AdminGalleryComponent} from '../admin/admin-gallery/admin-gallery.component';
import {GalleryCreateComponent} from '../admin/gallery-create/gallery-create.component';
import {LoadingComponent} from '../loading/loading.component';

const BMROUTE: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'loading', component: LoadingComponent
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
      {path: 'post-create', component: PostCreateComponent},
      {path: 'gallery', component: AdminGalleryComponent},
      {path: 'gallery-create', component: GalleryCreateComponent},
    ]
  }
];

export const BM_ROUTE = RouterModule.forRoot(BMROUTE);
