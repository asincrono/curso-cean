import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app-alerts',
  templateUrl: 'alerts.component.html'
})

export class AlertsComponent implements OnInit {
  allowNewAlerts = false
  alertCreationStatus = 'No server was created'
  alertCreated = false

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.allowNewAlerts = true, 1000)
  }

  onCreateServer () {
    this.alertCreationStatus = 'Server created!'
    this.alertCreated = true
  }
}