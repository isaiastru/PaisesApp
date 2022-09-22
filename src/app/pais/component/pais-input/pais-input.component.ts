import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
      console.log('debouncer', valor);
    });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
