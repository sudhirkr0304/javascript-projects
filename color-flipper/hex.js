let arr = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

export default function Generatecolor() {
  let str = '';

  for (let i = 0; i < 6; i++) {
    let ele = Math.floor(Math.random() * 15);
    str = str + arr[ele];
  }
  return str;
}
