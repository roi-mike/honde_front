import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDePassePerduViewComponent } from './mot-de-passe-perdu-view.component';

describe('MotDePassePerduViewComponent', () => {
  let component: MotDePassePerduViewComponent;
  let fixture: ComponentFixture<MotDePassePerduViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotDePassePerduViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotDePassePerduViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
