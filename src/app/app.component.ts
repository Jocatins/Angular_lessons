import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gypsy';
  name = 'titan';
  getTitan() {
    return 'Jenny';
  }
  obj = {
    name: 'ana',
    age: 45,
  };
}
