import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html'  
})
export class AlumnoFormComponent implements OnInit {

  faUserPlus =faUserPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
