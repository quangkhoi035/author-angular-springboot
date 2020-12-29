import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/user.service';
import { User } from 'src/app/user';
import { RoleServices } from 'src/app/role.service';
import { Role } from 'src/app/role';
import {Menu} from '../../menu';
import {MenuServices} from '../../menu.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;
  checkboxesDataList: Role[];
  selectedRolesList: Role[];

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserServices,
              private roleService: RoleServices) { }

  ngOnInit() {
    this.roleService.getRolesList().subscribe((roles: Role[]) => {
      this.checkboxesDataList = roles;
    });

    this.user = new User();

    this.id = this.route.snapshot.params.id;

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedRolesList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }
  updateRole() {
    this.user.roles = this.selectedRolesList;
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRole();
  }

  gotoList() {
    this.router.navigate(['/list-user']);
  }

}
