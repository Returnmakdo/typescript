// alias 적용
type Player = {
  readonly name: string; // readonly 적용 시 에러 발생
  age?: number;
};

// 함수에는 아래처럼 alias를 사용 가능하다. (return 하는 값이 객체라는 뜻 이고, 매개변수로 name이라는 string값을 받아온다.)
const playerMaker = (name: string): Player => ({
  name,
});

const myName = playerMaker("치영");
myName.age = 26;

//////////////////////////////////////////////////////////////////////////////

// Tuple
const player: readonly [string, number, boolean] = ["치영", 12, false];

// any
const a: any[] = [1, 2, 3, 4];
const b: any = true;
console.log(a + b); // <-- 이게 가능해짐
