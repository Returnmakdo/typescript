abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Apple extends User {
  // 부모에게서 상속받은 함수
  getNickName() {
    // 만약 부모 클래스에서 private으로 생성자를 만들었다면 아래 코드는 사용이 불가하다.
    return this.nickName; // 부모 클래스에서 protected로 생성자를 만들었기에 자식 클래스에서는 접근이 가능하나, 외부에서는 접근이 불가함.
  }
}

const chii = new Apple('chi', 'las', 'sdfsd');
chii.getFullName();
