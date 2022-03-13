import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterItem } from 'src/app/modules/airlines/models/filterItem.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() ToggleCheckBox = new EventEmitter<string>();
  filterList: FilterItem[] = [];

  constructor() { }

  ngOnInit() {
    this.filterList = [
      {
        "filterId": "1",
        "name": "Oneworld",
        "alliance": "OW",
      },
      {
        "filterId": "2",
        "name": "Sky Team",
        "alliance": "ST",
      },
      {
        "filterId": "3",
        "name": "Star Alliance",
        "alliance": "SA",
      }
    ]
  }

  onCheckboxChange(value) {
    this.ToggleCheckBox.emit(value);
  }

}
