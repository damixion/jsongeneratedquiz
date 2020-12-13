import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';
import { Observable } from 'rxjs';
import { QuizQuery } from '../models/query';
import { FirebaseResultService } from '../services/firebase-result.service';
import { SrcTxtService } from '../services/src-txt.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  otPoint = new EventEmitter<string>();

  punkty: number;
  query: Array<QuizQuery>;
  actQuery: QuizQuery;
  nAct = 0;
  start = false;
  numberPoint = 0;

  colorCheck = 'primary';
  selected = -1;

  @ViewChild('timer') timer: CountdownComponent;

  constructor(private srcTxt: SrcTxtService, private sendResult: FirebaseResultService) {  this.getQuery(); }

  ngOnInit(): void {  }

  go(): void
  {
    this.start = true;

    this.setActualQuery();

  }

  getQuery(): void
  {
   this.srcTxt.getQuery().subscribe( q =>{
   this.query = q;
   });
  }

  setActualQuery(): void
  {

    this.actQuery = this.query[this.nAct];
    this.nAct++;


  }

  next(): void
  {

    this.check();
    this.timer.restart();
    this.setActualQuery();
  }

  end(): void
  {
    this.check();
    this.otPoint.emit(this.numberPoint.toString());
    let pkt = this.numberPoint + '';
    let result = {name: this.name, result: pkt};
    this.sendResult.addResult(result);
  }

  check(): void
  {
    if (this.actQuery.answer[this.selected] === this.actQuery.answer[this.actQuery.positive])
    {
        this.numberPoint++;
        console.log(this.numberPoint);
    }
  }

  test(e: CountdownEvent): void
  {
    console.log(e);
    if (e.action === 'done')
   {
     if(this.nAct < this.query.length)
     {
     this.next();
     }
     else{
       this.end();
     }
   }

  }
}
