import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchAll } from 'rxjs/operators';
import { CategoryDTO } from '../_models/CategoryDTO';
import { University } from '../_models/University';
import { UniversityService } from './university.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'https://localhost:7076/api/categories'

  constructor(private http: HttpClient, private universityService: UniversityService) { }

  create(model: CategoryDTO) {
    return this.universityService.currentUniversity$.pipe(map((university: University) => {
      model['universityId'] = university.id;
      return this.http.post(this.baseUrl + `/create`, model);
    }), switchAll());
  }

  getAllByUniversityId() {
    return this.universityService.currentUniversity$.pipe(map((university: University) => {
      return this.http.get(this.baseUrl + `/${university.id}`);
    }), switchAll());
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
