import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myArray = ["A", "I", "C", "D", "G", "F", "O", "B", "N", "E"];
  public currWords = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  rotate(id: number): void {
    this.currWords[id] = (this.currWords[id] + 1) % this.myArray.length;
  }

  compare(): boolean {
    // The answer is CODING which is [2, 6, 3, 1, 8, 4];
    let correct = [2, 6, 3, 1, 8, 4];
    for (let i = 0; i < 6; i++) {
      if (this.currWords[i] != correct[i]) {
        return false;
      }
    }
    return true;
  }
}
