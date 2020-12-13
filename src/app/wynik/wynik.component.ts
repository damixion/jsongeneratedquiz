import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wynik',
  templateUrl: './wynik.component.html',
  styleUrls: ['./wynik.component.scss']
})
export class WynikComponent implements OnInit {

  @Input()
  point = '';

  constructor() { }
  ngOnInit(): void {}




}
