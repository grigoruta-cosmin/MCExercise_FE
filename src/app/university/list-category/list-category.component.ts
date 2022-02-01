import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryDTO } from 'src/app/_models/CategoryDTO';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  @Input() categories: CategoryDTO[] = null;
  @Output() removeCategory: EventEmitter<any> = new EventEmitter();
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  delete(id: string) {
    this.categoryService.delete(id).subscribe(response => {
      console.log(response);
      this.removeCategory.emit(id);
    })
  }
}
