import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Plano} from './plano';
import {Sismed} from './sismed';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlanoCargaService {

  private apiUrl = 'http://localhost:8080/planos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  cargaPlano(plano: Plano): Observable<Sismed[]> {
    console.log(plano);
    // this.messageService.add(`Plano: ${plano.data_plano}`);
    // this.messageService.add(`PlanoService1 ${plano.dataPlano}`);
    return this.http.post<Sismed[]>(this.apiUrl + '/importar', plano, this.httpOptions).pipe(
      tap(_ => this.log(`Plano cargado y convertido`)),
      catchError(this.handleError<Sismed[]>('cargaPlano'))
    );
  }

  addPlano(plano: Plano) {
    console.log(plano);
    this.http.post(this.apiUrl + '/add', plano)
      .subscribe(
        data  => {
          this.log(`Plano cargado en la BD`);
        },
        error  => {
          this.handleError<Plano>('addPlano');
        }
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
      this.messageService.add(`PlanoService: ${message}`);
  }
}
