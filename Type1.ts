// alias 적용
type Player = {
  readonly name: string; // readonly 적용 시 에러 발생
  age?: number;
};

// 함수에는 아래처럼 alias를 사용 가능하다. (return 하는 값이 객체라는 뜻 이고, 매개변수로 name이라는 string값을 받아온다.)
const playerMaker = (name: string): Player => ({
  name,
});

const myName = playerMaker('치영');
myName.age = 26;

//////////////////////////////////////////////////////////////////////////////

// Tuple
const player: readonly [string, number, boolean] = ['치영', 12, false];

// any
const a: any[] = [1, 2, 3, 4];
const b: any = true;
console.log(a + b); // <-- 이게 가능해짐

// unknown (api를 받을 떄 데이터가 어떤형식일 지 모를때 unknown으로 타입 선언해주고 분기처리 해줌)
let response: unknown;

if (typeof response === 'number') {
  let answer = response + 1;
}
if (typeof response === 'string') {
  let answer = response.toUpperCase();
}

// void -> dont return function
function hello() {
  console.log('x');
}

// never -> 절대 return 하지 않은 함수일 때
function hi(): never {
  throw new Error('xxx');
}

function hiii(name: string | number) {
  if (typeof name === 'string') {
    name; // string
  } else if (typeof name === 'number') {
    name; // number
  } else {
    name; // type이 올바르게 들어오지 않았을 경우
  }
}
