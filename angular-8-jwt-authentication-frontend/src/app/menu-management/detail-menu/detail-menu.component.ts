import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServices } from 'src/app/menu.service';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  id: number;
  menu: Menu;

  constructor(private route: ActivatedRoute, private router: Router,
              private menuService: MenuServices) { }

  ngOnInit() {
    this.menu = new Menu();

    this.id = this.route.snapshot.params.id;

    this.menuService.getMenu(this.id)
      .subscribe(data => {
        console.log(data)
        this. menu = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['list-menu']);
  }
}
