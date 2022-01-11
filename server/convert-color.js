const HEX_STRING_DELIMITER = /.{1,2}/g
const HEX_RADIX = 16

export const rgbToHex = (r, g, b) => 
  [r,g,b].reduce((hex, color) => hex + pad(color.toString(HEX_RADIX)), '')

export const hexToRgb = (hexString) =>
  hexString.match(HEX_STRING_DELIMITER).reduce((schema, code) => {
    schema.push(parseInt(code, HEX_RADIX))
    return schema
  }, [])

const pad = (hex) => (hex.length === 1 ? '0' + hex : hex)