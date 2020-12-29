import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';
import { RoleServices } from 'src/app/role.service';
import { Role } from 'src/app/role';
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  id: number;
  role: Role;
  checkboxesDataList: Menu[];
  selectedMenusList: Menu[];

  constructor(private route: ActivatedRoute, private router: Router,
              private menuService: MenuServices,
              private roleService: RoleServices) { }

  ngOnInit() {
    this.menuService.getMenusList().subscribe((menus: Menu[]) => {
      this.checkboxesDataList = menus;
    });

    this.role = new Role();

    this.id = this.route.snapshot.params.id;

    this.roleService.getRole(this.id)
      .subscribe(data => {
        console.log(data);
        this.role = data;
      }, error => console.log(error));
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedMenusList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }
  updateRole() {
    this.role.menus = this.selectedMenusList;
    this.roleService.updateRole(this.id, this.role)
      .subscribe(data => {
        console.log(data);
        this.role = new Role();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRole();
  }

  gotoList() {
    this.router.navigate(['/list-role']);
  }

}
