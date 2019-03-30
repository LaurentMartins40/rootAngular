import { Component, OnInit } from '@angular/core';
import { Formations } from '../model/Formations'
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_DETAIL_SKILLS, PATH_DETAIL } from '../app.routes.constantes';
import { FormationsResolvers } from '../resolver/FormationsResolvers';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
formations:Object;
  constructor(private router: Router,private route:ActivatedRoute) {}
  navigateToConnaissances(){
    this.router.navigate([PATH_DETAIL ,this.route.parent.snapshot.paramMap.get('idDetail'), PATH_DETAIL_SKILLS]);
  }
  ngOnInit() {
    this.route.data.subscribe(data =>{ this.formations = data['formations'] ;console.log('Formations', data['formations'])});
  }

}
