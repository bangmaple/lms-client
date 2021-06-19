import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserDialogComponent } from './add-new-user-dialog.component';

describe('AddNewUserDialogComponent', () => {
  let component: AddNewUserDialogComponent;
  let fixture: ComponentFixture<AddNewUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
