import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  public mapOpen = false;

  openMap() {
      this.mapOpen = true;
  }

  closeMap() {
      this.mapOpen = false;
  }

}
