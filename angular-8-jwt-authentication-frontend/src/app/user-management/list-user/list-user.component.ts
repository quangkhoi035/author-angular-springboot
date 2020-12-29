import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServices } from 'src/app/user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserServices,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['list-user/update-user', id]);
  }

}
