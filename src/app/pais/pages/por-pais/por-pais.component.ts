import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  onError: boolean = false;
  datosPaises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.onError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
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
  sugerencias(termino: string): void {
    this.onError = false;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.datosPaises = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }
}
