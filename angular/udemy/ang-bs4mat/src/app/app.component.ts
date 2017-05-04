import { Component } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: Array<{name: string, type: string}> = []

  private redName: string
  private blueName: string

  constructor (private http: Http) {

  }

  onItemAdded(item: {name: string, type: string}) {
    console.log(item)
    this.items.push(item)
  }

  postIt() {
    console.log('posting it')
    const body = { }
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    this.http.post('http://www.playboy.com:1000', body, { headers: headers }).map((res: Response) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
      return Observable.throw('wtf!?')
    })
  }
}
