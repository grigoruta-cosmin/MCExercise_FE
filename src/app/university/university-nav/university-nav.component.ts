import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/_services/university.service';

@Component({
  selector: 'app-university-nav',
  templateUrl: './university-nav.component.html',
  styleUrls: ['./university-nav.component.css']
})
export class UniversityNavComponent implements OnInit {

  constructor(public universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.universityService.logout();
    this.router.navigate(['university/login']);
  }
}
