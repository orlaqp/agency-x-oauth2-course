import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizeBottomSheetComponent } from './unauthorize-bottom-sheet.component';

describe('UnauthorizeBottomSheetComponent', () => {
  let component: UnauthorizeBottomSheetComponent;
  let fixture: ComponentFixture<UnauthorizeBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizeBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizeBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
