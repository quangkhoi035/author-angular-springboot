import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';
import { RoleServices } from 'src/app/role.service';
import { Role } from 'src/app/role';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  role: Role = new Role();
  checkboxesDataList: Menu[];
  selectedMenusList: Menu[];
  submitted = false;

  constructor(private menuService: MenuServices,
              private roleService: RoleServices,
              private router: Router) { }

  ngOnInit() {
    this.menuService.getMenusList().subscribe((menus: Menu[]) => {
      this.checkboxesDataList = menus;
    });

  }

  newRole(): void {
    this.submitted = false;
    this.role = new Role();
  }

  save() {
    this.role.menus = this.selectedMenusList;
    this.roleService
      .createRole(this.role).subscribe(data => {
        console.log(data);
        this.role = new Role();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/list-role']);
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedMenusList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }
}
