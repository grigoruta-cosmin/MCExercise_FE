import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../_models/UserDTO';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: UserDTO = null;
  constructor(private accountService: AccountService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  update(userData) {
    this.accountService.update(userData).subscribe( result => {
      console.log(result);
    })
  }

  getUserProfile() {
    this.accountService.getCurrentUserData().subscribe((user: UserDTO) => {
      this.userData = user;
      console.log(user)
    });
  }
}
