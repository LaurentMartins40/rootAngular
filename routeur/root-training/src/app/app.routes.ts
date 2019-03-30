import { Routes } from '@angular/router';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormationComponent } from './formation/formation.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { FormationsResolvers } from './resolver/FormationsResolvers';


export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_DETAIL + '/:idDetail',
        component: DetailComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
            {
                path: PATH_DETAIL_FORMATIONS, component: FormationComponent,
                resolve: {
                    formations: FormationsResolvers
                }
            },
            { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent, canActivate: [LoggedInGuardGuard] },
        ]
    }
];