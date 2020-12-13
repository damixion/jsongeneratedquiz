import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  @Output()
  otName = new EventEmitter<string>();

  name = '';
  constructor() { }

  ngOnInit(): void {  }

  sendName(): void
  {
    this.otName.emit(this.name);
  }
}
