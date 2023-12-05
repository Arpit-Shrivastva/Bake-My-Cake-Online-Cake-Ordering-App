import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CakeViewComponent } from '../cake-view/cake-view.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeViewService implements CanDeactivate<CakeViewComponent> {

  constructor() { }

  canDeactivate(
    component: CakeViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
}
