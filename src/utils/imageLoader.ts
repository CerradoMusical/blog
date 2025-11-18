export default function imageLoader({ src }: { src: string }) {
  // Em produção com basePath, adiciona o prefixo
  const basePath = process.env.NODE_ENV === 'production' ? '/blog' : ''
  return `${basePath}${src}`
}
