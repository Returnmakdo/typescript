type GenericPrint = {
  <T, M>(arr: T[], arr2: M): T;
};

const genericPrint: GenericPrint = (arr) => arr[0];

const aaa = genericPrint([1, 2, 3, 4], 'x');
const bbb = genericPrint([true, false, true, true], 1);
const ccc = genericPrint(['1', '2', '3', '4'], false);
const ddd = genericPrint([1, 2, true, false, 'hello'], []);
