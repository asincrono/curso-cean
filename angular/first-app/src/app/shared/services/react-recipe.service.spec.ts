import { TestBed, inject } from '@angular/core/testing'

import { ReactRecipeService } from './react-recipe.service'

describe('ReactRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactRecipeService]
    })
  })

  it('should ...', inject([ReactRecipeService], (service: ReactRecipeService) => {
    expect(service).toBeTruthy()
  }))
})
