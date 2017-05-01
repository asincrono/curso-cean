import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { Recipe } from './../models'

const baseUrl = 'http://localhost:3000'

@Injectable()
export class RecipeHttpService {

  constructor (
    private http: Http
  ) { }

  getRecipes (): Observable<Array<Recipe>> {
    return this.http.get(`${baseUrl}/recipes`).map((res: Response) => {
      console.log(res)
      return res.json() as Array<Recipe>
    })
  }
}
