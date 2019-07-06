import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BM_ROUTE} from './sysgem/bmroute';
import { ImageCropperModule } from 'ngx-image-cropper';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {NavComponent} from './nav/nav.component';
import {Localservice} from './sysgem/localservice';
import {AuthInterceptor} from './sysgem/auth.interceptor';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { GalleryCreateComponent } from './admin/gallery-create/gallery-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    NavComponent,
    PostCreateComponent,
    AdminGalleryComponent,
    GalleryCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule,
    BM_ROUTE
  ],
  providers: [Localservice, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
