import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityDTO } from 'src/app/_models/UniversityDTO';
import { UniversityService } from 'src/app/_services/university.service';

@Component({
  selector: 'app-university-profile',
  templateUrl: './university-profile.component.html',
  styleUrls: ['./university-profile.component.css']
})
export class UniversityProfileComponent implements OnInit {
  universityData: UniversityDTO = null;

  constructor(private universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
    this.getUniversityProfile();
  }

  getUniversityProfile() {
    this.universityService.getCurrentUniversityData().subscribe((university: UniversityDTO) => {
      this.universityData = university;
      console.log(university);
    })
  }

  update() {
    this.universityService.update(this.universityData).subscribe(response => {
      console.log(response);
    })
  }
}
