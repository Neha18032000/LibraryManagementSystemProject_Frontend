import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookListComponent } from './returnbook-list.component';

describe('ReturnbookListComponent', () => {
  let component: ReturnbookListComponent;
  let fixture: ComponentFixture<ReturnbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
