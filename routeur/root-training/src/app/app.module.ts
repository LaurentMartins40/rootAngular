import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ROUTES } from './app.routes';
import { FormationComponent } from './formation/formation.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormationComponent,
    ConnaissancesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }