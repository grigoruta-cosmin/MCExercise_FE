import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDTO } from 'src/app/_models/UserDTO';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() userData: UserDTO;
  @Output() onUpdate: EventEmitter<UserDTO> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
