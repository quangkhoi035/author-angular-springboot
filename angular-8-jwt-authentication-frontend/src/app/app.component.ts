import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserServices } from 'src/app/user.service';
import {Menu} from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  username: string;
  menus: Menu[];

  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserServices) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
      this.userService.getMenusListByUserName(this.username).subscribe((menus: Menu[]) => {
        this.menus = menus;
      });
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
