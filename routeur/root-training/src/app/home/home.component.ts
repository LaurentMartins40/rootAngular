import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PATH_DETAIL } from '../app.routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  navigateToDetail(idDetail) {
    this.router.navigate([PATH_DETAIL,idDetail]);
  }
  ngOnInit() {
  }

}
