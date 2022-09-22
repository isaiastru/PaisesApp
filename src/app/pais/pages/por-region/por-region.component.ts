import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  paises: Country[] = [];

  regiones: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
    'todos',
  ];

  regionActiva: string = '';

  constructor(private paisService: PaisService) {}

  getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void {
    this.regionActiva = region;
    //this.paises = [];

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
