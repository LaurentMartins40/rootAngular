import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from '../app.routes.constantes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(private router: Router,private route:ActivatedRoute) {}
  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }
  navigateToNextDetail() {
    this.router.navigate([PATH_DETAIL,parseInt(this.route.snapshot.paramMap.get('idDetail'))+1]);
  }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap)
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      }); 
  }

}
