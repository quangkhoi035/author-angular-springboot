import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ListUserComponent} from './user-management/list-user/list-user.component';
import {ListRoleComponent} from './role-management/list-role/list-role.component';
import {ListMenuComponent} from './menu-management/list-menu/list-menu.component';
import {CreateMenuComponent} from './menu-management/create-menu/create-menu.component';
import {UpdateMenuComponent} from './menu-management/update-menu/update-menu.component';
import {DetailMenuComponent} from './menu-management/detail-menu/detail-menu.component';
import {CreateRoleComponent} from './role-management/create-role/create-role.component';
import {UpdateRoleComponent} from './role-management/update-role/update-role.component';
import {CreateUserComponent} from './user-management/create-user/create-user.component';
import {UpdateUserComponent} from './user-management/update-user/update-user.component';
import {ModOnlyComponent} from './mod-only/mod-only.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'list-user/create-user', component: CreateUserComponent},
  { path: 'list-user/update-user/:id', component: UpdateUserComponent},
  { path: 'list-role', component: ListRoleComponent },
  { path: 'list-role/create-role', component: CreateRoleComponent },
  { path: 'list-role/update-role/:id', component: UpdateRoleComponent },
  { path: 'list-menu', component: ListMenuComponent },
  { path: 'list-menu/create-menu', component: CreateMenuComponent },
  { path: 'list-menu/update-menu/:id', component: UpdateMenuComponent },
  { path: 'list-menu/detail-menu/:id', component: DetailMenuComponent },
  { path: 'mod-only', component: ModOnlyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
