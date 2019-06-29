import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BM_ROUTE} from './sysgem/bmroute';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {NavComponent} from './nav/nav.component';
import {Localservice} from './sysgem/localservice';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BM_ROUTE
  ],
  providers: [Localservice],
  bootstrap: [AppComponent]
})
export class AppModule {
}
