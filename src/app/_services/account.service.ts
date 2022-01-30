import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:7076/api/'
  private currentUserSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  register(model: any) {
    return this.http.post(this.baseUrl + 'users/register', model).pipe(
      map((response: User) => {
        const user = response
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'users/authenticate', model).pipe(
      map((response: User) => {
        const user = response
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  setCurrentuser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
