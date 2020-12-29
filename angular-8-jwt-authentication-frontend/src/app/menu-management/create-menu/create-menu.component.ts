import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu = new Menu();
  submitted = false;

  constructor(private menuService: MenuServices,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.menu = new Menu();
  }

  save() {
    this.menuService
      .createMenu(this.menu).subscribe(data => {
        console.log(data);
        this.menu = new Menu();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/list-menu']);
  }

}
