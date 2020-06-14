const color = ['red', '#2F2F2F', 'pink', 'rgba(120,70,200)'];
export function Generatecolor() {
  let ele = Math.floor(Math.random() * 43);
  return color[ele];
}
