import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageViewComponent } from './register-page-view.component';

describe('RegisterPageViewComponent', () => {
  let component: RegisterPageViewComponent;
  let fixture: ComponentFixture<RegisterPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
