'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BandaSopruLayout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const carrosselImages = [
    {
      src: '/images/perfil/Fotos Soprü/foto1.jpg',
      alt: 'Soprü - Foto 1'
    },
    {
      src: '/images/perfil/Fotos Soprü/foto2.jpg',
      alt: 'Soprü - Foto 2'
    },
    {
      src: '/images/perfil/Fotos Soprü/foto3.jpg',
      alt: 'Soprü - Foto 3'
    },
    {
      src: '/images/perfil/Fotos Soprü/foto4.jpg',
      alt: 'Soprü - Foto 4'
    },
    {
      src: '/images/perfil/Fotos Soprü/foto5.jpg',
      alt: 'Soprü - Foto 5'
    }
  ]

  const nextImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carrosselImages.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + carrosselImages.length) % carrosselImages.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/perfil/Fotos Soprü/Capa.jpg"
              alt="Banda Soprü - Capa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Saiba tudo sobre a banda Tocantinense Soprü – Foto: Julia Triers
          </p>
        </div>

        {/* 2. Título Principal */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8">
            De sopro a fôlego: a jornada da Soprü na cena musical tocantinense
          </h1>
        </div>

        {/* 3. Parágrafos Iniciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Em meio às noites quentes de Palmas, a Soprü nasceu quase como um experimento passageiro. 
              No início, a ideia era simples: um projeto rápido, com músicos que iriam e viriam sem compromisso de continuidade. 
              Tanto que o nome Soprü veio para referenciar algo passageiro e efêmero, como um sopro.
            </p>
            <p>
              Mas o destino contrariou a intenção inicial e o que começou como algo provisório acabou se firmando. 
              Hoje a banda tem em seu som uma mistura única de indie rock e MPB.
            </p>
            <p>
              Atualmente, a Soprü é composta por cinco integrantes talentosos: <strong>Samuel Carvalho</strong> (vocalista), 
              <strong> Caio Paiva</strong> (guitarra e synth), <strong> Wellis Raik</strong> (guitarra), 
              <strong> Iury Groove</strong> (baixo e synths) e <strong> Lucas de Jesus</strong> (clarinete e sax).
            </p>
          </div>
        </div>

        {/* 4. Imagem 1 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/perfil/Fotos Soprü/integrantesBandaSopru.jpg"
              alt="Integrantes da Banda Soprü"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Integrantes da Banda Soprü – Foto: Divulgação
          </p>
        </div>

        {/* 5. Bloco de Depoimento (Samuel) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Eu comecei esse projeto com um amigo, e a ideia era que fosse algo rápido, passageiro, sem membros fixos. 
              Só que, mesmo depois que ele foi embora, as músicas ficaram comigo e acabei chamando o Caio para tocar junto. 
              Aos poucos, vieram outros e a formação foi se firmando."
            </p>
            <p className="text-gray-600 font-semibold">– Samuel Carvalho, vocalista da Soprü</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O primeiro álbum da banda <strong>'Enquanto a Orquestra Não Vem'</strong> foi lançado em 
            <strong> 18 de abril de 2020</strong>, em meio a uma pandemia global. Esses cinco rapazes se uniram 
            por meio da música e viram uma forma de externalizar seus sentimentos através de suas canções.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
            <p className="text-lg text-gray-700 italic mb-4">
              "O primeiro álbum, que é o 'Enquanto a Orquestra Não Vem', nós gravamos no meio da pandemia e 
              lançamos no dia 18 de abril de 2020. Com a aceitação do público, percebemos que a banda não seria 
              só uma coisa passageira, como a ideia do nome tinha sugerido."
            </p>
            <p className="text-gray-600 font-semibold">– Samuel Carvalho</p>
          </div>
        </div>

        {/* 6. Bloco de Depoimento (Caio Paiva) */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Para o guitarrista Caio Paiva, a banda sempre foi um espaço de liberdade e criação. A Soprü é, para ele, 
            uma maneira de construir algo bem maior do que si mesmo. Ele afirma querer ver as pessoas viverem, não apenas existirem.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
            <p className="text-lg text-gray-700 italic mb-4">
              "Desde que entrei na banda, nunca pensei nela como algo passageiro. Pra mim, a Soprü é um laboratório, é amizade, é família. 
              É um lugar onde a gente aprende e se reinventa o tempo todo. Eu vejo esse projeto como uma oportunidade de construir algo 
              que vai além da nossa vida pessoal, que toca a cidade, que movimenta a cena."
            </p>
            <p className="text-gray-600 font-semibold">– Caio Paiva, guitarrista</p>
          </div>
        </div>

        {/* 7. Imagem 2 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/perfil/Fotos Soprü/bandaSopruApresentando.jpg"
              alt="Soprü se apresentando"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Soprü se apresentando – Foto: Juliana Triers (@cerradompb)
          </p>
        </div>

        {/* 8. Texto sobre Estilo Musical e Processo Criativo */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A banda desenvolveu uma identidade sonora única que mescla elementos do indie rock com a tradição da MPB, 
              criando algo genuinamente tocantinense. Seus arranjos incorporam instrumentos pouco convencionais no rock, 
              como clarinete e sax, trazidos por Lucas de Jesus, que adicionam uma camada especial e diferenciada à sonoridade do grupo.
            </p>
            <p>
              O processo criativo da banda envolve experimentação constante e colaboração entre todos os membros, 
              resultando em composições que refletem tanto influências individuais quanto a identidade coletiva do grupo.
            </p>
          </div>
        </div>

        {/* 9. Texto sobre Primeira Apresentação e Conquistas */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A primeira apresentação da banda aconteceu em um Halloween, marcando o início de uma trajetória que os levaria 
              até o palco da Casa Rockambole em São Paulo. Cada show representa não apenas uma apresentação, mas a realização 
              de sonhos e a consolidação de metas que a banda traçou desde o início.
            </p>
            <p>
              A banda tem grandes aspirações para o futuro, buscando sempre expandir seus horizontes musicais e alcançar 
              novos públicos, mantendo suas raízes tocantinenses como fonte de inspiração.
            </p>
          </div>
        </div>

        {/* 10. Texto sobre Experiência de Palco */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "A emoção de tocar nossas próprias composições é indescritível. Ver o público cantando junto, 
                sentindo a nossa música, é o que nos motiva a continuar criando."
              </p>
              <p className="text-gray-600 font-semibold">– Samuel Carvalho</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "O palco é onde a nossa coletividade se manifesta plenamente. É um espaço de comunhão, 
                onde música, banda e público se tornam uma coisa só."
              </p>
              <p className="text-gray-600 font-semibold">– Caio Paiva</p>
            </div>
          </div>
        </div>

        {/* 11. Imagem 3 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/perfil/Fotos Soprü/eventoBandaSopru.jpg"
              alt="Evento da Banda Soprü"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Evento "Um dia para chamar de seu" – Foto: Juliana Triers (@cerradompb)
          </p>
        </div>

        {/* 12. Texto sobre Cena Musical do Tocantins */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A Soprü tornou-se uma das principais referências da música independente em Palmas, inspirando uma nova geração 
              de músicos e ajudando a consolidar a cena cultural da capital tocantinense. O crescimento da cena musical local 
              tem sido impulsionado por bandas como a Soprü, que abrem caminho para novos artistas.
            </p>
            <p>
              O papel da banda no movimento cultural tocantinense vai além da música, contribuindo para a formação de uma 
              identidade artística regional forte e autêntica, que respira a essência do cerrado brasileiro.
            </p>
          </div>
        </div>

        {/* 13. Depoimentos Finais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "A arte tem o poder de transformar realidades. Nossa música é uma forma de resistência, 
                de construir comunidade e de mostrar que é possível sonhar e realizar, mesmo partindo do cerrado."
              </p>
              <p className="text-gray-600 font-semibold">– Caio Paiva</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              A jornada da Soprü prova que às vezes os projetos mais especiais nascem da espontaneidade, e que a música 
              verdadeira tem o poder de transformar não apenas os artistas, mas toda uma comunidade musical. 
              De um simples "sopro" inicial, a banda se transformou no "fôlego" da cena musical tocantinense.
            </p>
          </div>
        </div>

        {/* 14. Galeria */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Galeria
          </h2>
          
          <div className="relative">
            <div className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={carrosselImages[currentImageIndex].src}
                  alt={carrosselImages[currentImageIndex].alt}
                  fill
                  className={`object-contain transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                />
              </div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {carrosselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-blue-900 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mt-6 text-center">
              Soprü mostra sua identidade musical no palco. Fotos: Juliana Triers (@cerradompb)
            </p>
          </div>
        </div>

        {/* Botões de Redes Sociais */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">
            Acompanhe a Soprü
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.instagram.com/bandasopru/"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </Link>
            
            <Link
              href="https://open.spotify.com/intl-pt/artist/2e8dBCjQCLAqXAQwt89fi9?si=lKkVnWoBR9eWXhYxM6t3Jg&nd=1&dlsi=7612279046324627"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
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
  )
}