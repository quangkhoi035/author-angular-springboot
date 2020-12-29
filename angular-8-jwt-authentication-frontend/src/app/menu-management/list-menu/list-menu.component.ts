import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  menus: Observable<Menu[]>;

  constructor(private menuService: MenuServices,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.menus = this.menuService.getMenusList();
  }

  deleteMenu(id: number) {
    this.menuService.deleteMenu(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  menuDetails(id: number) {
    this.router.navigate(['list-menu/detail-menu', id]);
  }

  updateMenu(id: number) {
    this.router.navigate(['list-menu/update-menu', id]);
  }

}
