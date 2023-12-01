type Team = 'red' | 'blue' | 'yellow';

interface Uuser {
  nickname: string;
  healthBar: number;
  team: Team;
}

const hero: Uuser = {
  nickname: 'mamam',
  healthBar: 12,
  team: 'blue',
};

// type 키워드는 좀 더 다양한 역할을 하지만 interface는 object의 모양을 설명해주기만을 위함임.

interface Cuser {
  name: string;
}

interface Pplayer extends Cuser {}

const nico: Pplayer = {
  name: 'nico',
};

// 인터페이스 상속 방법 (private property 사용 불가)
interface Npc {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Pc implements Npc, Human {
  constructor(public firstName: string, public lastName: string, public health: number) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
