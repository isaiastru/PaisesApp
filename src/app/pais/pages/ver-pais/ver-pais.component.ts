import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Name } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent {
  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        if (pais.length) {
          this.pais = pais[0];
        }
      });
  }
}
