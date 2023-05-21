import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.sass']
})
export class HeaderHomeComponent implements OnInit {

  constructor(public router:Router){}
  ngOnInit(): void {

  }

  cerrar(){
    localStorage.removeItem("item")
    this.router.navigate(['/login']);

  }
}
