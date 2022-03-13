import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() cards: Array<any> = [];
  @Output() loadMore = new EventEmitter<string>();
  allianceName: {};

  constructor() { }

  ngOnInit(): void {
    this.allianceName = {
      "OW": "OneWorld",
      "ST": "Sky Team",
      "SA": "Star Alliance"
    }
  }

  onScroll() {
    this.loadMore.emit();
  }

}
