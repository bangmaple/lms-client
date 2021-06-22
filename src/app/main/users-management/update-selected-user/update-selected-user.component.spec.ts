import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSelectedUserComponent } from './update-selected-user.component';

describe('UpdateSelectedUserComponent', () => {
  let component: UpdateSelectedUserComponent;
  let fixture: ComponentFixture<UpdateSelectedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSelectedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSelectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
