import fetch from 'node-fetch'
import { expect } from 'chai'

const BASE_URL = 'http://localhost:3000'
const PATH = {
  RGBHEX: 'rgbToHex',
  HEXRGB: 'hexToRgb'
}
const QUERY = {
  RGB: 'red=255&green=255&blue=255',
  HEX: 'hex=00ff00'
}
const RESULTS = {
  STATUS: 200,
  RGBHEX: 'ffffff',
  HEXRGB: '[0,255,0]'
}

describe('Color Code Converter API', () => {
  describe('RGB to Hex conversion', () => {
    const URL = `${BASE_URL}/${PATH.RGBHEX}?${QUERY.RGB}`
    console.log({ URL })
  
    it('Returns status 200 for converting RGB to Hex.', async () => {
      const response = await fetch(URL)
      expect(response.status).to.equal(RESULTS.STATUS)
    })

    it('Returns the color in Hex.', async () => {
      const response = await fetch(URL)
      expect(await response.text()).to.equal(RESULTS.RGBHEX)
    })
  })

  describe('Hex to RGB conversion', () => {
    const URL = `${BASE_URL}/${PATH.HEXRGB}?${QUERY.HEX}`
    console.log({ URL })

    it('Returns status 200 for converting Hex to RGB.', async () => {
      const response = await fetch(URL)
      expect(response.status).to.equal(RESULTS.STATUS)
    })

    it('Returns the color in RGB.', async () => {
      const response = await fetch(URL)
      expect(await response.text()).to.equal(RESULTS.HEXRGB)
    })
  })
})