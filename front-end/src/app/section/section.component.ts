import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present = ''

  constructor() { }

  // 부모로부터 button에서 넘어온 값을 매개변수로 받아 콘솔에 출력.
  // 이 startTime은 section.component.html 에 <app-buttons>에 클릭이벤트를 줌으로써 동작함.
  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }
}
