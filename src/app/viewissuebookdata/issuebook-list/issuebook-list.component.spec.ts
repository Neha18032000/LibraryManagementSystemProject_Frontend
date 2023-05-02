import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebookListComponent } from './issuebook-list.component';

describe('IssuebookListComponent', () => {
  let component: IssuebookListComponent;
  let fixture: ComponentFixture<IssuebookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
