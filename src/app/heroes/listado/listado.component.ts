import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  deleteHeroe: string = "";

  constructor() {}

  ngOnInit(): void {

  }

  borraHeroe()
  {
    console.log('Borrando herue');
    this.deleteHeroe = this.heroes.shift() || '';

  }

}
