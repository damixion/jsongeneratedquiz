import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = '';
  point = '';

  setName(n: string): void
  {
    this.name = n;

  }

  setPoint(p: string): void
  {
    this.point = p;
  }

}
