import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-TicaretClient';
  constructor(){}
}
//app.component e veri getirmesini sağlayan kod bloğudur.
// $.get("https://localhost:7238/api/Products", data => {
//   console.log(data)
// })


