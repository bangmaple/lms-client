import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailUserDialogComponent } from './view-detail-user-dialog.component';

describe('ViewDetailUserDialogComponent', () => {
  let component: ViewDetailUserDialogComponent;
  let fixture: ComponentFixture<ViewDetailUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
