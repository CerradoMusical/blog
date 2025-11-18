'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BandaSopruPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const carrosselImages = [
    {
      src: '/images/perfil/Fotos Soprü/carrosselSorpo1.jpg',
      alt: 'Soprü - Apresentação 1',
      legend: 'Soprü em apresentação ao vivo',
      description: 'A energia contagiante da banda no palco'
    },
    {
      src: '/images/perfil/Fotos Soprü/carrosselSopro2.jpg',
      alt: 'Soprü - Apresentação 2',
      legend: 'Momentos únicos da banda',
      description: 'A conexão especial com o público tocantinense'
    },
    {
      src: '/images/perfil/Fotos Soprü/carrosselSopro3.jpg',
      alt: 'Soprü - Apresentação 3',
      legend: 'A essência da Soprü',
      description: 'Música que toca o coração do cerrado'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carrosselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carrosselImages.length) % carrosselImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* Foto de Capa da Banda */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/perfil/Fotos Soprü/Capa.jpg"
              alt="Soprü - Foto de Capa da Banda"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Soprü
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                De sopro a fôlego: uma jornada musical tocantinense
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            A História da Banda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em meio às noites quentes de Palmas, a Soprü nasceu quase como um experimento passageiro, 
            mas o que começou como algo provisório acabou se firmando na cena musical tocantinense
          </p>
          <div className="w-20 h-1 bg-yellow-400 rounded mx-auto mt-6"></div>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Foto Principal da Banda */}
            <div className="text-center md:text-left">
              <div className="inline-block relative">
                <Image
                  src="/images/perfil/Fotos Soprü/integrantesBandaSopru.jpg"
                  alt="Banda Soprü - Integrantes"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Texto sobre a banda */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  A Formação e os Primeiros Passos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  No início, a ideia era simples: um projeto rápido, com músicos que iriam e viriam 
                  sem compromisso de continuidade. Tanto que o nome Soprü veio para referenciar algo 
                  passageiro e efêmero, como um sopro.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Mas o destino contrariou a intenção inicial e o que começou como algo provisório 
                  acabou se firmando. Hoje a banda tem em seu som uma mistura única de indie rock 
                  e MPB, criando algo genuinamente tocantinense.
                </p>
              </div>

              {/* Integrantes */}
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Formação Atual</h3>
                <div className="space-y-2">
                  <p>🎤 <strong>Samuel Carvalho</strong> - Vocalista</p>
                  <p>🎸 <strong>Caio Paiva</strong> - Guitarra e Synth</p>
                  <p>🎸 <strong>Wellis Raik</strong> - Guitarra</p>
                  <p>🎵 <strong>Iury Groove</strong> - Baixo e Synths</p>
                  <p>🎺 <strong>Lucas de Jesus</strong> - Clarinete e Sax</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-blue-900 mb-2">Citação dos Fundadores</h4>
                <p className="text-gray-700 italic">
                  "Eu comecei esse projeto com um amigo, e a ideia era que fosse algo rápido, 
                  passageiro, sem membros fixos. Só que, mesmo depois que ele foi embora, as músicas 
                  ficaram comigo e acabei chamando o Caio para tocar junto."
                </p>
                <p className="text-gray-600 text-sm mt-2">- Samuel Carvalho</p>
              </div>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="mt-20 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Momentos da Banda
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={carrosselImages[currentImageIndex].src}
                  alt={carrosselImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                />
                
                {/* Botão Anterior */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Botão Próximo */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carrosselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Legenda da Imagem */}
                <div className="absolute bottom-16 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2 bg-black/50 px-3 py-2 rounded">
                    {carrosselImages[currentImageIndex].legend}
                  </h3>
                  <p className="text-sm opacity-90 bg-black/30 px-3 py-2 rounded">
                    {carrosselImages[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção sobre o álbum - Seguindo formato da página sobre */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="text-center md:text-left">
              <div className="inline-block relative">
                <Image
                  src="/images/perfil/Fotos Soprü/bandaSopruApresentando.jpg"
                  alt="Soprü apresentando"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  "Enquanto a Orquestra Não Vem" (2020)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O primeiro álbum da banda foi lançado em <strong>18 de abril de 2020</strong>, 
                  em meio a uma pandemia global. Esses cinco rapazes se uniram por meio da música 
                  e viram uma forma de externalizar seus sentimentos através de suas canções, 
                  abrindo espaço para novos ouvintes e fortalecendo os laços entre si.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-blue-900 mb-2">O Marco de 2020</h4>
                <p className="text-gray-700 italic">
                  "Nós gravamos no meio da pandemia e lançamos no dia 18 de abril de 2020. 
                  Com a aceitação do público, percebemos que a banda não seria só uma coisa 
                  passageira, como a ideia do nome tinha sugerido."
                </p>
                <p className="text-gray-600 text-sm mt-2">- Samuel Carvalho</p>
              </div>
            </div>
          </div>

          {/* Seção de Valores da Banda - Seguindo formato da página sobre */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-12">
              Uma Filosofia de Vida Musical
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎵</div>
                <h4 className="font-bold text-blue-900 mb-3">Som Característico</h4>
                <p className="text-gray-600">
                  Mistura única de indie rock e MPB com instrumentos pouco convencionais como clarinete e sax.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-bold text-blue-900 mb-3">Laboratório Musical</h4>
                <p className="text-gray-600">
                  "A Soprü é um laboratório, é amizade, é família. Um lugar onde a gente aprende e se reinventa."
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-bold text-blue-900 mb-3">Impacto Cultural</h4>
                <p className="text-gray-600">
                  Construir algo que vai além da vida pessoal, que toca a cidade e movimenta a cena musical.
                </p>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Extras */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              Galeria da Banda
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/perfil/Fotos Soprü/eventoBandaSopru.jpg"
                  alt="Evento da Banda Soprü"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/perfil/Fotos Soprü/foto 1.jpg"
                  alt="Soprü - Foto 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/perfil/Fotos Soprü/foto 2.jpg"
                  alt="Soprü - Foto 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Botões Sociais - Final da Página */}
          <div className="text-center">
            
            {/* Conclusão do roteiro */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Futuro Promissor
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                A jornada da Soprü prova que às vezes os projetos mais especiais nascem da espontaneidade, 
                e que a música verdadeira tem o poder de transformar não apenas os artistas, mas toda uma 
                comunidade musical. De um simples "sopro" inicial, a banda se transformou no "fôlego" 
                da cena musical tocantinense.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Conecte-se com a Soprü
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link 
                href="https://www.instagram.com/bandasopru?igsh=MTF5anZyN2N6ZXVpcg%3D%3D"
                target="_blank"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Siga no Instagram
              </Link>
              
              <Link 
                href="https://open.spotify.com/intl-pt/artist/2e8dBCjQCLAqXAQwt89fi9?si=lKkVnWoBR9eWXhYxM6t3Jg&nd=1&dlsi=7612279046324627"
                target="_blank"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Ouça no Spotify
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}