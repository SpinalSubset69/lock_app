import { createCipheriv, createDecipheriv, scrypt } from 'crypto'
import { promisify } from 'util'
import { cartographyConfig } from '../config'
import {
  ADD_NUMBERS_TO_PASSWORD,
  ADD_SYMBOLS_TO_PASSWORD,
  ALPHAS,
  NUMBERS,
  SYMBOLS,
} from '../enums'

//PROTOTYPES
String.prototype.replaceAt = function (index, char) {
  const a = this.split('')
  a[index] = char
  return a.join('')
}

String.prototype.symbolsInString = function (symbols) {
  let cont = 0
  const symbolsArray = [...symbols]
  for (let char of this) {
    if (symbolsArray.find((s) => s === char)) {
      cont++
    }
  }
  return cont
}
//PROTOTYPES

async function Encrypt(text) {
  const iv = Buffer.from(cartographyConfig.cipher_iv)
  const key = await promisify(scrypt)(
    cartographyConfig.password_key,
    'salt',
    32,
  )

  const cipher = createCipheriv('aes-256-cbc', key, iv)
  let textEncrypted = cipher.update(text, 'utf-8', 'hex')
  textEncrypted += cipher.final('hex')
  return textEncrypted
}

async function Decrpyt(text) {
  const iv = Buffer.from(cartographyConfig.cipher_iv)
  const key = await promisify(scrypt)(
    cartographyConfig.password_key,
    'salt',
    32,
  )

  const decipher = createDecipheriv('aes-256-cbc', key, iv)
  let textDecrypted = decipher.update(text, 'hex', 'utf-8')
  textDecrypted += decipher.final()
  return textDecrypted
}

async function CreatePasswordAsync(
  length = 8,
  hasNumbers,
  hasSymbols,
  howNumbers = 0,
  howSymbols = 0,
) {
  //Check hasNumbers and hasSymbols
  if (!hasNumbers && !hasSymbols)
    throw new Error(
      'You must specify  a number or symbols to create a password',
    )
  if (length < 8) throw new Error('Passowrd length must be 8 characters long')
  if (howSymbols + howNumbers >= Math.floor(length / 2))
    throw new Error(
      'Numbers and Symbols must be between 0 and Half of Password length',
    )

  const alphas = ALPHAS
  const numbers = NUMBERS
  const symbols = SYMBOLS

  let chars = alphas
  //If theres no limit of numbers or symbols
  if (hasNumbers && howNumbers === 0) chars += numbers
  if (hasSymbols && howSymbols === 0) chars += symbols

  //If theres  a limit for numbers or symbols
  if (howNumbers != 0 && hasNumbers) chars += numbers.slice(0, howNumbers)
  if (howSymbols != 0 && hasSymbols) chars += symbols.slice(0, howSymbols)

  return await GeneratePassword(length, chars, howNumbers, howSymbols)
}

function GeneratePassword(length, chars, howNumbers = 0, howSymbols = 0) {
  return new Promise((resolve, reject) => {
    let password = ''
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    //Assure password has total numbers length asked by user
    if (howNumbers !== 0) {
      const numbers = chars.match(/[0-9]+/).join('')
      let numbersInPassword = password.match(/\d/g)
      if (!numbersInPassword) {
        password = password.replaceAt(length - 1, 1)
        numbersInPassword = password.match(/\d/g).join('').length
      }
      password = AddToPassword(
        password,
        numbers,
        howNumbers,
        numbersInPassword,
        ADD_NUMBERS_TO_PASSWORD,
      )
    }

    if (howSymbols !== 0) {
      const symbols = '!@#$%^&*_-=+'
      let symbolsInPassword = password.symbolsInString(symbols)
      password = AddToPassword(
        password,
        symbols,
        howSymbols,
        symbolsInPassword,
        ADD_SYMBOLS_TO_PASSWORD,
      )
    }

    resolve(password)
  })
}

function AddToPassword(password, chars, howMany, atPassword, type) {
  if (atPassword === howMany) return password
  const randomValue = chars[Math.floor(Math.random() * chars.length)]
  switch (type) {
    case ADD_NUMBERS_TO_PASSWORD:
      const randomIndex = Math.floor(Math.random() * password.length)
      password = password.replaceAt(randomIndex, randomValue)
      atPassword = password.match(/\d/g).join('').length
      break

    case ADD_SYMBOLS_TO_PASSWORD:
      const charsInPassword = password.match(/[a-zA-Z]/g).join('')
      const randomCharsIndex = Math.floor(
        Math.random() * charsInPassword.length,
      )
      const charInPassword = charsInPassword[randomCharsIndex]
      password = password.replace(charInPassword, randomValue)
      atPassword = password.symbolsInString(chars)
      break
  }
  return AddToPassword(password, chars, howMany, atPassword, type)
}

export const cartography = {
  Encrypt,
  Decrpyt,
  CreatePasswordAsync,
}
