import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/_services/university.service';

@Component({
  selector: 'app-university-login',
  templateUrl: './university-login.component.html',
  styleUrls: ['./university-login.component.css']
})
export class UniversityLoginComponent implements OnInit {
  model: any = {};

  constructor(public universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.universityService.login(this.model).subscribe(response => {
      console.log(response);
      this.model = {};
      this.router.navigate(['university/home'])
    })
  }
}
