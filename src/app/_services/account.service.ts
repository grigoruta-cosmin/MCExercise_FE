import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, map, share, switchAll } from 'rxjs/operators'
import { User } from '../_models/User';
import { UserDTO } from '../_models/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:7076/api/'
  private currentUserSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  currentUser$ = this.currentUserSource.asObservable();
  currentUserData: UserDTO;

  constructor(private http: HttpClient) { }

  public get userValue() {
    return this.currentUserSource.value;
  }

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

  update(model: any) {
    return this.currentUser$.pipe(map((user: User) => {
      model['id'] = user.id;
      return this.http.put(this.baseUrl + 'users/update', model);
    }), switchAll());
  }

  delete() {
    let obs = this.currentUser$.pipe(filter((user) => user != null), map((user: User) => {
      return this.http.delete(this.baseUrl + 'users/delete/' + user.id);
    }), switchAll(), share());
    obs.subscribe(() => {
      this.currentUserSource.next(null);
    })
    return obs;
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

  getCurrentUserData() {
    return this.currentUser$.pipe(map((user: User) => {
      return this.http.get(this.baseUrl + 'users/' + user.id, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }), switchAll());
  }
  
  setCurrentuser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
