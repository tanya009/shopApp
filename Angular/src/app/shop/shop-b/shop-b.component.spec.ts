import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBComponent } from './shop-b.component';

describe('ShopBComponent', () => {
  let component: ShopBComponent;
  let fixture: ComponentFixture<ShopBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
