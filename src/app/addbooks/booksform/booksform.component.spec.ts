import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksformComponent } from './booksform.component';

describe('BooksformComponent', () => {
  let component: BooksformComponent;
  let fixture: ComponentFixture<BooksformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
