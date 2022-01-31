import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AccountService } from "../_services/account.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AlwaysAuthGuard implements CanActivate {
    constructor(private accountService: AccountService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.accountService.currentUser$.pipe(
            take(1), 
            map(user => user != null)
        );
    }
}