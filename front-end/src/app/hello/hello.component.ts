import { Component } from "@angular/core";


@Component ({
    selector: 'hello',
    templateUrl: './hello.component.html', // template은 ``을 이용해 직접 html 코드를 작성할 수 있지만 가독성이 떨어지므로 파일을 따로 불러오는 것이 좋다.
    styleUrls: ['./hello.component.css']
})


export class HelloComponent {

}