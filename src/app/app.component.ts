import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() imageUrl = "https://api.adorable.io/avatars/500/300@adorable.io.png";
  baseUrl= 'https://api.adorable.io/avatars/500/';
  urlSuffix= '@adorable.io.png';
  num;
  constructor(){
    setInterval( () =>{
      this.num = Math.floor((Math.random() * 10) + 1);;
      this.generateRandomFace(this.num);
    }, 1000);
  }

  generateRandomFace(num) {
    this.imageUrl = `${this.baseUrl}${this.num}${this.urlSuffix}`;
  }
}
