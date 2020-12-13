import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, queueScheduler } from 'rxjs';
import { QuizQuery } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class SrcTxtService {

  private qr = new BehaviorSubject<Array<QuizQuery>>([]);
  quizQuerys = this.qr.asObservable();

  constructor(private http: HttpClient) { }

  getQuery(): Observable<Array<QuizQuery>>
  {
    return  this.http.get<Array<QuizQuery>>('assets/query.json')
  }

}
