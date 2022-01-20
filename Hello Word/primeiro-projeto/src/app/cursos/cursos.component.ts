import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos;

  constructor(private CursosService: CursosService) {
    this.nomePortal = 'https://www.alura.com.br';

    /*for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/

    //var service = new CursosService();

    this.cursos = this.CursosService.getCursos();

  }

  ngOnInit() {
  }

  }
