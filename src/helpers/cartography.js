import { createCipheriv, createDecipheriv, scrypt } from 'crypto'
import { promisify } from 'util'
import { cartographyConfig } from '../config'

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

export const cartography = {
  Encrypt,
  Decrpyt,
}
