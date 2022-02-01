import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fields : any [] = [{
    name: 'username',
    type: 'text',
    label: 'Username'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  },
  {
    name: 'firstname',
    type: 'text',
    label: 'First Name'
  },
  {
    name: 'lastname',
    type: 'text',
    label: 'Last Name'
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'country',
    type: 'text',
    label: 'Country'
  }]
  model: any = {};
  constructor(public accountService: AccountService, public router: Router) { }
  ngOnInit(): void {
    
  }

  isFormDisabled() {
    return !this.model.username || !this.model.password || !this.model.firstname || !this.model.lastname || !this.model.country || !this.model.type;
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      this.router.navigate(['user/home']);
      console.log(response);
    });
  }

}
