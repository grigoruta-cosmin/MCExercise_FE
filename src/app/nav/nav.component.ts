import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public navbarService: NavbarService, public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.router.navigate(['/login']);
  }
}
