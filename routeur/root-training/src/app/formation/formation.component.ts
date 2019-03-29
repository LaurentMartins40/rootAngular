import { Component, OnInit } from '@angular/core';
import { Formations } from '../model/Formations'
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_DETAIL_SKILLS, PATH_DETAIL } from '../app.routes.constantes';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations = [
    new Formations("Angular"),
    new Formations("TypeScript")
  ];
  constructor(private router: Router,private route:ActivatedRoute) {}
  navigateToConnaissances(){
    this.router.navigate([PATH_DETAIL ,this.route.parent.snapshot.paramMap.get('idDetail'), PATH_DETAIL_SKILLS]);
  }
  ngOnInit() {
  }

}
