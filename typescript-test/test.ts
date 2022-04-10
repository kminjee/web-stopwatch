
/*
    public : 모두 접근 가능
    protected : 외부 접근 불가능, 상속 접근 가능
    private : 외부 접근 불가능, 상속 접근 불가능
*/
class Parent {
    public one = 10;
    protected two = 20;
    private three = 30;

    constructor() {
        this.one;
        this.two;
        this.three;
    }
}
class Child extends Parent {
    constructor() { // 상속받는 경우에는 생성자(constructor)를 사용해야한다. 
        super();
        this.one;
        this.two;
        // this.three; 
    }
}
let p = new Parent();



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



