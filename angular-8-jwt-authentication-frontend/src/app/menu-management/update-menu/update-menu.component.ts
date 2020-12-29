import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  id: number;
  menu: Menu;

  constructor(private route: ActivatedRoute, private router: Router,
              private menuService: MenuServices) { }

  ngOnInit() {
    this.menu = new Menu();

    this.id = this.route.snapshot.params.id;

    this.menuService.getMenu(this.id)
      .subscribe(data => {
        console.log(data);
        this.menu = data;
      }, error => console.log(error));
  }

  updateMenu() {
    this.menuService.updateMenu(this.id, this.menu)
      .subscribe(data => {
        console.log(data);
        this.menu = new Menu();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMenu();
  }

  gotoList() {
    this.router.navigate(['/list-menu']);
  }

}
