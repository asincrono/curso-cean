import { TestBed, inject } from '@angular/core/testing';

import { RecipeHttpService } from './recipe-http.service';

describe('RecipeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeHttpService]
    });
  });

  it('should ...', inject([RecipeHttpService], (service: RecipeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
