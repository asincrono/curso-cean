import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  type: String = 'success'

  constructor() {
    this.type = Math.random() > 0.5 ? 'success' : 'warning'
  }

  ngOnInit() {
  }

}
