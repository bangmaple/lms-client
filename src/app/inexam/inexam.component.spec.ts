import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InexamComponent } from './inexam.component';

describe('InexamComponent', () => {
  let component: InexamComponent;
  let fixture: ComponentFixture<InexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
