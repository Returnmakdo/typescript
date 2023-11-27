// call signatures
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);

// overloading
type Plus = {
  (c: number, d: number): number;
  (c: number, d: string): number;
};

const plus: Plus = (c, d) => {
  if (typeof d === 'string') return c;
  return c + d;
};

// overloading example
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// Router.push({
//   path: '/home',
//   state: 1,
// });
