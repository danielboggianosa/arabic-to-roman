module.exports = transform = (arabic) => {
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thousands = ["", "M", "MM", "MMM"];

  const m = Math.floor(arabic / 1000);
  const cm = arabic % 1000;
  const c = Math.floor(cm / 100);
  const xc = cm % 100;
  const x = Math.floor(xc / 10);
  const i = xc % 10;

  var roman = thousands[m] + hundreds[c] + tens[x] + units[i];

  return roman;
};
