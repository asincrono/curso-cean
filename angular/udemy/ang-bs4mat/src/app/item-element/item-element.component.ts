import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-item-element',
  templateUrl: './item-element.component.html',
  styleUrls: ['./item-element.component.css']
})
export class ItemElementComponent implements OnInit {
  @Input() item: {
    name: string,
    type: string
  }
  constructor() { }

  ngOnInit() {
  }

}
