import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourticketComponent } from './yourticket.component';

describe('YourticketComponent', () => {
  let component: YourticketComponent;
  let fixture: ComponentFixture<YourticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
