import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { UniversityService } from "../_services/university.service";

@Injectable({
    providedIn: 'root'
})
export class UniversityAuthGuard implements CanActivate {
    constructor(private universityService: UniversityService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.universityService.currentUniversity$.pipe(
            take(1),
            map(university => university != null)
        );
    }

}