import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesAssignment';
  public myLinks: {name: string, value: string}[] = [
    {name: 'About     ', value: 'comp1'},
    {name: 'Video     ', value: 'comp2'},
    {name: 'Playground', value: 'comp3'},
  ];

  public currDisplay: string = '';
  public showMenu: boolean = false;


constructor() {
  this.currDisplay = '';
  this.showMenu = false;
}

switchContent(content: string) {
  this.currDisplay = content;
}

changeMenuDisplay() {
  this.showMenu = !this.showMenu;
}
}
