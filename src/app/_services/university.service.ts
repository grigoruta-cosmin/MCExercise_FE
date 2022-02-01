import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchAll } from 'rxjs/operators';
import { University } from '../_models/University';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  baseUrl = 'https://localhost:7076/api/universities'
  private currentUniversitySource = new BehaviorSubject<University>(JSON.parse(localStorage.getItem('university')));
  currentUniversity$ = this.currentUniversitySource.asObservable();
  
  constructor(private http: HttpClient) { }

  public get universityValue() {
    return this.currentUniversitySource.value;
  }

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

  getCurrentUniversityData() {
    return this.currentUniversity$.pipe(map((university: University) => {
      return this.http.get(this.baseUrl + `/${university.id}`, {
        headers: {
          Authorization: `Bearer ${university.token}`
        }
      })
    }), switchAll());
  }

  update(model: any) {
    return this.currentUniversity$.pipe(map((university: University) => {
      model['id'] = university.id;
      return this.http.put(this.baseUrl + '/update', model, {
        headers: {
          Authorization: `Bearer ${university.token}`
        }
      })
    }), switchAll());
  }

  setCurrentUniversity(university: University) {
    this.currentUniversitySource.next(university);
  }

  logout() {
    localStorage.removeItem('university');
    this.currentUniversitySource.next(null);
  }
}
