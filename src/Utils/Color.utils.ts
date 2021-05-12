/**
 *
 * @param hex  hexadecimal color
 * @param alpha(optional) opacity
 * @returns rgba string
 */
export const hextoRGB = (hex: string, alpha?: number) => {
  //* Remove # from hex string
  const hexCode = hex.match(/\w/g)?.join("");
  //* getting RGB hex value (hex:#RRGGBB)
  const colors = (hexCode as string).match(/.{1,2}/g);
  //* Converting hex Rgb value into rgb values
  const rgbaValues: number[] = (colors as string[]).map((color) =>
    parseInt(color, 16)
  );
  //*Checking if given hex is 3 digit long
  if ((colors as string[]).length === 3) {
    rgbaValues.push(1);
  } else if (alpha) {
    rgbaValues.push(alpha);
  }
  const rgba = `rgba(${rgbaValues.join(",")})`;
  return rgba;
};
/**
 * Convert RGBA value to hex(#RRGGBBAA)
 *
 * @param   {number}  red      red (0-255)
 * @param   {number}  blue     blue(0-255)
 * @param   {number}  green    green(0-255)
 * @return  {string}  hex
 */
export const rgbToHex = (
  red: number,
  blue: number,
  green: number,
  alpha: number
): string => {
  //* Converting red into hex red
  const hexRed = red.toString(16).padStart(2, "0");
  //* Converting red into hex green
  const hexGreen = green.toString(16).padStart(2, "0");
  //* Converting red into hex blue
  const hexBlue = blue.toString(16).padStart(2, "0");
  //* Converting alpha into hex alpha
  //** Multiplying alpha * 255 and removing all decimal points
  //** converting 255 decimal number to  2 digit hexstring
  const hexAlpha = Number((alpha * 255).toFixed())
    .toString(16)
    .padStart(2, "0");

  return `#${hexRed}${hexGreen}${hexBlue}${hexAlpha}`;
};
export const hslToHex = () => {};
