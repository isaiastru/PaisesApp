import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  onError: boolean = false;
  datosPaises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.onError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.datosPaises = paises;
      },
      (err) => {
        this.onError = true;
        this.datosPaises = [];
      }
    );
  }
  sugerencias(terminio: string): void {
    this.onError = false;
  }
}
