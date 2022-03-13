import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  })

  it('should create Cards Component', () => {
    expect(component).toBeTruthy();
  });

  it('change @input should render cards', () => {
    component.cards = [{
      "site": "https://subus.cl/",
      "code": "SUBUS",
      "alliance": "none",
      "phone": "",
      "name": "SuBús",
      "usName": null,
      "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
      "defaultName": null,
      "logoURL": "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
      "fullLogUrl": "https://www.kayak.com/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
    }];
    fixture.detectChanges();
    console.log(fixture.debugElement.query(By.css('.card-wrapper')))
    expect(fixture.debugElement.query(By.css('.card-wrapper'))).toBeTruthy();
  });

  it('#onScroll() should trigger @output component', () => {
    spyOn(component.loadMore, 'emit');
    component.onScroll();
    expect(component.loadMore.emit).toHaveBeenCalled();
  });

});
