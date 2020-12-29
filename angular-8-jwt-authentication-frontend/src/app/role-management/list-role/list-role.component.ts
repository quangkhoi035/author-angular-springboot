import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleServices } from 'src/app/role.service';
import { Role } from 'src/app/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles: Observable<Role[]>;

  constructor(private roleService: RoleServices,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roles = this.roleService.getRolesList();
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roleDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateRole(id: number) {
    this.router.navigate(['list-role/update-role', id]);
  }

}
