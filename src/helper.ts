const Helpers = function () {};

interface iHelper {
  hex: string;
  rgb: string;
  tenValue: number;
}

interface iRgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

Helpers.prototype.alterToHex = function (input: number) {
  const hex: string = input.toString(16);

  return hex.length === 1 ? ('0' + hex).toString() : hex;
};

Helpers.prototype.rgbToHex = function ([r, g, b, a]: number[]) {
  const hexed: string = this.alterToHex(r) + this.alterToHex(g) + this.alterToHex(b);

  return '#' + hexed;
}

Helpers.prototype.hexToRgb = function (hexInput: string) {
  // 3 ~ 4자리면 똑같은것 두번씩 반복 (#900 => #990000, #0f08 => #00ff0088)
  // 6자리면 rrggbb, 8자리면 rrggbbaa.
  // 모두 #로 시작.
}