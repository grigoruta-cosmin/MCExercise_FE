import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { University } from '../_models/University';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  baseUrl = 'https://localhost:7076/api/universities'
  constructor(private http: HttpClient) { }
  private currentUniversitySource = new BehaviorSubject<University>(JSON.parse(localStorage.getItem('university')));
  currentUniversity$ = this.currentUniversitySource.asObservable();

  register(model: any) {
    return this.http.post(this.baseUrl + '/register', model).pipe(
      map((response: University) => {
        const university = response;
        if (university) {
          localStorage.setItem('university', JSON.stringify(university));
          this.currentUniversitySource.next(university)
        }
      })
    );
  }

  login(model: any) {
    return this.http.post(this.baseUrl + '/authenticate', model).pipe(
      map((response: University) => {
        const university = response;
        if (university) {
          localStorage.setItem('university', JSON.stringify(university));
          this.currentUniversitySource.next(university);
        }
        return university;
      })
    );
  }

  setCurrentUniversity(university: University) {
    this.currentUniversitySource.next(university);
  }

  logout() {
    localStorage.removeItem('university');
    this.currentUniversitySource.next(null);
  }
}
