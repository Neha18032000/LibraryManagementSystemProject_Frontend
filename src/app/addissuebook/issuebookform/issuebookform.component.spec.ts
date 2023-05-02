import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebookformComponent } from './issuebookform.component';

describe('IssuebookformComponent', () => {
  let component: IssuebookformComponent;
  let fixture: ComponentFixture<IssuebookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebookformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuebookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
