import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ResultQuiz } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class FirebaseResultService {

  quizResult: AngularFireList<any> = null;
  constructor(private firebase: AngularFireDatabase)
  {
    this.quizResult = firebase.list('/quiz');
  }


  addResult(result: ResultQuiz): void
  {
    this.quizResult.push(result);
    console.log('dziaa');
  }
}
