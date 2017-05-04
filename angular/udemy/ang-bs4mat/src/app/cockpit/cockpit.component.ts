import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onRedCreated = new EventEmitter<{name: string, type: string}>()
  @Output() onBlueCreated = new EventEmitter<{name: string, type: string}>()

  constructor () { }

  onAddRed (redInput: HTMLInputElement) {
    this.onRedCreated.emit({ name: redInput.value, type: 'red' })
  }

  onAddBlue (blueInput: HTMLInputElement) {
    this.onBlueCreated.emit({ name: blueInput.value, type: 'blue'})
  }

  ngOnInit () {
  }

}
