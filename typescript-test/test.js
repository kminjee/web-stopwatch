var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    public : 모두 접근 가능
    protected : 외부 접근 불가능, 상속 접근 가능
    private : 외부 접근 불가능, 상속 접근 불가능
*/
var Parent = /** @class */ (function () {
    function Parent() {
        this.one = 10;
        this.two = 20;
        this.three = 30;
        this.one;
        this.two;
        this.three;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super.call(this) || this;
        _this.one;
        _this.two;
        return _this;
        // this.three; 
    }
    return Child;
}(Parent));
var p = new Parent();
// constructor 에는 매개변수를 넣을 수 있고 인스턴스 생성 시 인자를 필수로 넣어주어야 함.
// 생성자 매개변수에 pubilc(=접근제한자)를 붙이면 Car라는 class의 속성이 된다.
/*
    class Car {
        constructor(pubilc age: number) {
        }
    }
    let car = new Car(10);
    console.log(age);
*/
