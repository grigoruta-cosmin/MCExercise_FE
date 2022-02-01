import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/_models/CategoryDTO';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoriesData: CategoryDTO[] = null;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  add(event: any) {
    console.log("event", event)
    this.categoriesData.push(event);
  }

  remove(event: any) {
    console.log("event", event);
    this.categoriesData = this.categoriesData.filter(category => category.id !== event);
  }

  getCategories() {
    this.categoryService.getAllByUniversityId().subscribe(response => {
      this.categoriesData = <any> response;
    })
  }
  
}
