import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBListComponent } from './shop-b-list.component';

describe('ShopBListComponent', () => {
  let component: ShopBListComponent;
  let fixture: ComponentFixture<ShopBListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
