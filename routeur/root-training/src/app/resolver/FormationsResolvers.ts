import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { timeout } from 'q';
@Injectable({ providedIn: 'root' })
export class FormationsResolvers implements Resolve<any> {
    constructor() {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve([{
                    title: 'Module Angular',
                    decription: '',
                }, {
                    title: 'Module JavaScript',
                    decription: '',
                }, {
                    title: 'Module TypeScript',
                    decription: '',
                }])
            },5000)
        })
    }
}
