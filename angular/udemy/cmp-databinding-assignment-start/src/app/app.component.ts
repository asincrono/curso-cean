import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private odds: Array<boolean> = []
  private evens: Array<boolean> = []

  checkNumber(event: {value: number}) {
    console.log(`value: ${event.value}`)
    if (event.value % 2 === 0) {
      this.evens.push(true)
    } else {
      this.odds.push(true)
    }
  }
}
