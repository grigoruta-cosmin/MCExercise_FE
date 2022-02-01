import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniversityDTO } from 'src/app/_models/UniversityDTO';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.css']
})
export class UniversityFormComponent implements OnInit {
  @Input() universityData: UniversityDTO;
  @Output() onUpdate: EventEmitter<UniversityDTO> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
}
