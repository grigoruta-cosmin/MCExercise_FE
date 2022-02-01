import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { NavbarService } from 'src/app/_services/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public navbarService: NavbarService, public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    console.log('ajung aici')
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['user/login']);
  }
}
