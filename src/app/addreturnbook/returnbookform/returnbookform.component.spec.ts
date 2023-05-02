import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookformComponent } from './returnbookform.component';

describe('ReturnbookformComponent', () => {
  let component: ReturnbookformComponent;
  let fixture: ComponentFixture<ReturnbookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
