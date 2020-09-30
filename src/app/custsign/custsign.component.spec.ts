import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustsignComponent } from './custsign.component';

describe('CustsignComponent', () => {
  let component: CustsignComponent;
  let fixture: ComponentFixture<CustsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustsignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
