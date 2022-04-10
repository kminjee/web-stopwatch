import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnChanges {

  @Input() inputData: string | undefined;

  test = 1;

  constructor() { 

  }

  // ngOnChages : 변화를 감지하는 함수
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

}
