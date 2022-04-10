import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // @Output : 자식 > 부모로 데이터를 전달할 때 사용하는 데코레이터 : 자식에서 부모로 데이터를 보내는 프로퍼티를 지정
  // @Output을 사용할 땐 반드시 EventEmitter 타입의 프로퍼티를 선언한다. 
  @Output() clickEvent = new EventEmitter(); 

  constructor() { }

  // emit : 자식 > 부모로 데이터 전달할 때 @Output, EventEmitter와 함께 사용
  // 실제 값을 넘겨주고싶을 때 emit(10) 이렇게 () 안에 값을 넘겨줄 수 있다. 
  start() {
    this.clickEvent.emit('change!');
  }

  ngOnInit(): void {
  }

}
