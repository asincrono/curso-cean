import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private timer: NodeJS.Timer

  @Output() onNewNumber = new EventEmitter<{ value:  number }>()
  

  constructor() { }

  startGame() {
    this.timer = setInterval(() => {
      const number = Math.floor(Math.random() * 10) + 1
      console.log(`number: ${number}`)
      this.onNewNumber.emit({ value: number})
    }, 1000)
  }

  stopGame () {
    clearInterval(this.timer)
  }


  ngOnInit() {
  }

}
