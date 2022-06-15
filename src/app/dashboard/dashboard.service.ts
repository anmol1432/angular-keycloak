import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

interface billRes {
  message: string;
}
interface bill{
  amt:number,
  des:string
}

@Injectable({
  providedIn: 'root'
})
export class DshboardService {
  private saveBillUrl = 'http://localhost:3000/save/bill'
  private handleError: HandleError;
 
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** POST: add a new hero to the database */
  addBill(bill:any){
    return this.http.post<bill>(this.saveBillUrl, bill , httpOptions).pipe(
        catchError(this.handleError('saveBill', bill))
)}

}
