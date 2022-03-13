import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
  });

  it('should create filter component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the filter in an anchor tag', () => {
    component.filterList = [{
      "filterId": "1",
      "name": "Oneworld",
      "alliance": "OW",
    }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').value).toEqual('1');
    expect(fixture.nativeElement.querySelector('label').innerHTML).toEqual('Oneworld');
  });

  it('click input should change checkbox value', () => {
    component.filterList = [{
      "filterId": "1",
      "name": "Oneworld",
      "alliance": "OW",
    }];
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.checked).toBeFalsy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeTruthy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeFalsy();
  });

  it('click input should trigger component function', () => {
    spyOn(component, 'onCheckboxChange');
    component.filterList = [{
      "filterId": "1",
      "name": "Oneworld",
      "alliance": "OW",
    }];
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.click();
    fixture.detectChanges();
    expect(component.onCheckboxChange).toHaveBeenCalled();
  });

  it('click input should trigger @output component ', () => {
    spyOn(component.ToggleCheckBox, 'emit');
    component.filterList = [{
      "filterId": "1",
      "name": "Oneworld",
      "alliance": "OW",
    }];
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.click();
    expect(component.ToggleCheckBox.emit).toHaveBeenCalled();
  });
});
