// type GenericPrint = {
//   <T, M>(arr: T[], arr2: M): T;
// };

// const genericPrint: GenericPrint = (arr) => arr[0];

// 위 generic을 하나의 함수로 사용하는 법
const genericPrint = <T, V>(a: T[], b: V) => {
  return a[0];
};

const aaa = genericPrint([1, 2, 3, 4], 'x');
const bbb = genericPrint([true, false, true, true], 1);
const ccc = genericPrint(['1', '2', '3', '4'], false);
const ddd = genericPrint([1, 2, true, false, 'hello'], []);

type Developer<E> = {
  name: string;
  extraInfo: E;
};

type ChiyoungExtra = {
  favFood: string;
};
type ChiyoungDeveloper = Developer<ChiyoungExtra>;

const chiyoung: Developer<{ favFood: string }> = {
  name: 'chiyoung',
  extraInfo: {
    favFood: 'sss',
  },
};

const ahnchiyoung: Developer<{ device: string }> = {
  name: 'chiyoung',
  extraInfo: {
    device: 'mac',
  },
};

const chi: Developer<null> = {
  name: 'chi',
  extraInfo: null,
};

type ArrNumbers = Array<number>;
let arr: ArrNumbers = [1, 2, 3, 4];
