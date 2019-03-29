import { Component, OnInit } from '@angular/core';
import { Connaissances } from '../model/connaissances';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_DETAIL_FORMATIONS, PATH_DETAIL } from '../app.routes.constantes';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {
  connaissances= [
    new Connaissances("java"),
    new Connaissances("javaSctipt"),
  ];
  constructor(private router: Router,private route:ActivatedRoute) {}  
  navigateToFormations(){
    this.router.navigate([PATH_DETAIL ,this.route.parent.snapshot.paramMap.get('idDetail'),PATH_DETAIL_FORMATIONS]);
  }
  ngOnInit() {
  }

}
