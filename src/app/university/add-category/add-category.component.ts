import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryDTO } from 'src/app/_models/CategoryDTO';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryData: any = {};
  constructor(private categoryService: CategoryService) { }
  @Output() newCategory: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }

  add() {
    console.log(this.categoryData);
    this.categoryService.create(this.categoryData).subscribe(response => {
      console.log(response);
      this.newCategory.emit({...this.categoryData});
    })
  }

}
