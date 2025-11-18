export default function imageLoader({ src }: { src: string }) {
  // Sempre adiciona o basePath para export estático
  return `/blog${src}`
}
