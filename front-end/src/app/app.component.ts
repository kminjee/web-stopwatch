import { Component } from '@angular/core';

// 데코레이터 영역 : 컴포넌트 생성에 필요한 정보를 담고있는 객체를 인자로 전달 (메타데이터 객체)
// 컴포넌트는 하나의 레고 조각이라고 볼 수 있다.
@Component({
  selector: 'app-root', // 컴포넌트의 태그네임 (index.html의 <app-root></app-root>)
  templateUrl: './app.component.html', // 컴포넌트가 어떻게 렌더링될지 정의 하기 위함. 직접 작성할 수도 있고 파일을 불러올 수도 있음.
  styleUrls: ['./app.component.scss'] // css 파일
})

export class AppComponent {
  title = 'front-end';
}
