import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/user.service';
import {User} from '../../user';
import { RoleServices } from 'src/app/role.service';
import { Role } from 'src/app/role';
import { Router } from '@angular/router';
import {Menu} from '../../menu';
import {MenuServices} from '../../menu.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  checkboxesDataList: Role[];
  selectedRolesList: Role[];
  submitted = false;

  constructor(private userService: UserServices,
              private roleService: RoleServices,
              private router: Router) { }

  ngOnInit() {
    this.roleService.getRolesList().subscribe((roles: Role[]) => {
      this.checkboxesDataList = roles;
    });

  }

  newRole(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.user.roles = this.selectedRolesList;
    this.userService
      .createUser(this.user).subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/list-user']);
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedRolesList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }

}
