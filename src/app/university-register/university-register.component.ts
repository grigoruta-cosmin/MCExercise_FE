import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';
import { UniversityService } from '../_services/university.service';

@Component({
  selector: 'app-university-register',
  templateUrl: './university-register.component.html',
  styleUrls: ['./university-register.component.css']
})
export class UniversityRegisterComponent implements OnInit, OnDestroy {
  fields : any [] = [{
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  },
  {
    name: 'Name',
    type: 'text',
    label: 'Name'
  },
  {
    name: 'city',
    type: 'text',
    label: 'City'
  },
  {
    name: 'country',
    type: 'text',
    label: 'Country'
  }]
  model: any = {};

  constructor(public navbarService: NavbarService, public universityService: UniversityService) { }
  
  ngOnDestroy(): void {
    this.navbarService.setVisibility(true);
  }

  ngOnInit(): void {
    this.navbarService.setVisibility(false);
  }

  isFormDisabled() {
    return !this.model.name || !this.model.password || !this.model.email || !this.model.city || !this.model.country || !this.model.type;
  }

  register() {
    this.universityService.register(this.model).subscribe(response => {
      console.log(response);
    })
  }
}
