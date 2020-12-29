import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ListUserComponent } from './user-management/list-user/list-user.component';
import { ListRoleComponent } from './role-management/list-role/list-role.component';
import { ListMenuComponent } from './menu-management/list-menu/list-menu.component';
import { CreateMenuComponent } from './menu-management/create-menu/create-menu.component';
import { UpdateMenuComponent } from './menu-management/update-menu/update-menu.component';
import { DetailMenuComponent } from './menu-management/detail-menu/detail-menu.component';
import { CreateRoleComponent } from './role-management/create-role/create-role.component';
import { UpdateRoleComponent } from './role-management/update-role/update-role.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { UpdateUserComponent } from './user-management/update-user/update-user.component';
import { ModOnlyComponent } from './mod-only/mod-only.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ListUserComponent,
    ListRoleComponent,
    ListMenuComponent,
    CreateMenuComponent,
    UpdateMenuComponent,
    DetailMenuComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ModOnlyComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
