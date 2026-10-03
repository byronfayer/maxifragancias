import { WHATSAPP_NUMBER } from '../data/products'

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const generalMessage = 'Hola Maxi Fragancias, quisiera consultar por sus perfumes.'

export function productMessage(product) {
  return `Hola Maxi Fragancias, quisiera consultar la disponibilidad de ${product.name} (${product.brand}).`
}
