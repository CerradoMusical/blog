'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FernandaHofmmanLayout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const carrosselImages = [
    {
      src: '/images/bastidores/fernanda1.jpg',
      alt: 'Fernanda Hofmann - Galeria 1'
    },
    {
      src: '/images/bastidores/fernanda2.jpg',
      alt: 'Fernanda Hofmann - Galeria 2'
    },
    {
      src: '/images/bastidores/fernanda3.jpg',
      alt: 'Fernanda Hofmann - Galeria 3'
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/bastidores/fernanda-capa.jpg"
              alt="A história de uma menina que ousa sonhar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            A história de uma menina que ousa sonhar – Foto: Thaylon Reis
          </p>
        </div>

        {/* 2. Título Principal */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-8">
            Muito além do palco: a rotina e o coração de Fernanda Hofmann
          </h1>
        </div>

        {/* 3. Parágrafos Iniciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A preparação de Fernanda Hofmann antes de cada show é um ritual meticuloso que combina técnica, 
              emoção e dedicação. Cada detalhe é cuidadosamente planejado: o figurino que expressa sua 
              personalidade, a checagem do palco e dos equipamentos, a maquiagem que realça sua presença 
              cênica. Mas além da preparação física e técnica, existe um processo interno de conexão com 
              a música e consigo mesma.
            </p>
            <p>
              Nos bastidores, longe dos holofotes, Fernanda se transforma. É ali que a artista se prepara 
              não apenas tecnicamente, mas emocionalmente para entregar ao público uma apresentação autêntica 
              e verdadeira. A rotina pré-show envolve aquecimento vocal, revisão do repertório, ajustes finais 
              no figurino e, principalmente, um momento de introspecção onde ela se conecta com a essência 
              de cada música que irá apresentar.
            </p>
          </div>
        </div>

        {/* 4. Bloco de Depoimento - Fernanda sobre a música */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
            <p className="text-lg text-gray-700 italic mb-4">
              "A música sempre foi meu refúgio pessoal. É através dela que consigo expressar o que muitas 
              vezes as palavras não conseguem. Cada canção que componho carrega um pedaço da minha história, 
              das minhas alegrias e das minhas dores."
            </p>
            <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
          </div>
        </div>

        {/* 5. Imagem 1 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/bastidores/fernandaPerfil.jpg"
              alt="Retrato de Fernanda Hofmann durante a produção"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Retrato de Fernanda Hofmann durante a produção – Foto: Thaylon Reis
          </p>
        </div>

        {/* 6. Texto sobre o Processo de Preparação */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Fernanda se envolve intensamente tanto no aspecto técnico quanto físico da preparação de cada 
              show. Ela não delega nada ao acaso: verifica pessoalmente cada equipamento, testa o som, 
              ajusta a iluminação e garante que cada elemento esteja perfeito para proporcionar a melhor 
              experiência possível ao público.
            </p>
            <p>
              No palco, essa preparação meticulosa se transforma em confiança e espontaneidade. Fernanda 
              consegue se entregar completamente à música porque sabe que fez tudo ao seu alcance nos 
              bastidores. Essa segurança permite que ela seja genuína, que improvise quando necessário e 
              que crie uma conexão real com quem assiste ao show.
            </p>
          </div>
        </div>

        {/* 7. Bloco de Depoimento - Primeiros Shows e Desafios */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "Meu primeiro show foi um desafio e tanto. Eu estava lá, só com meu violão, sem bateria, 
                sem backing vocal, sem nada além da minha voz e das cordas. Foi assustador e libertador 
                ao mesmo tempo."
              </p>
              <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "Com o tempo, aprendi a ler o público, a entender quando intensificar a energia e quando 
                criar momentos de intimidade. A interação com a plateia deixou de ser algo que me assustava 
                para se tornar a parte mais gratificante de estar no palco."
              </p>
              <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
            </div>
          </div>
        </div>

        {/* 8. Imagem 2 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/bastidores/fernandaApresentando.jpg"
              alt="Momento da apresentação de Fernanda Hofmann"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Momento da apresentação de Fernanda Hofmann – Foto: Thaylon Reis
          </p>
        </div>

        {/* 9. Texto sobre Personalidade e Autenticidade */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              No palco, Fernanda se permite ser ela mesma, sem máscaras ou personagens. Essa autenticidade 
              é o que torna suas apresentações tão especiais e memoráveis. O público não assiste apenas a 
              uma performance técnica, mas vivencia um momento genuíno de conexão humana através da música.
            </p>
            <p>
              A conexão entre a Fernanda artista e a Fernanda humana é indissociável. Suas vulnerabilidades, 
              suas alegrias, suas dores – tudo isso se manifesta em sua música de forma honesta e tocante. 
              Ela não tenta ser quem não é, e é justamente essa sinceridade que conquista os corações.
            </p>
            <p>
              Para Fernanda, ser fiel à própria personalidade é mais do que uma escolha artística, é uma 
              necessidade. "Se eu tentar ser outra pessoa no palco, o público vai sentir. A música precisa 
              vir de um lugar verdadeiro, senão perde seu poder", ela afirma.
            </p>
          </div>
        </div>

        {/* 10. Bloco de Depoimento - Enfrentando uma crise antes do show */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-400">
            <p className="text-lg text-gray-700 italic mb-4">
              "Houve um dia em que tive uma crise emocional minutos antes de subir ao palco. Estava me 
              sentindo completamente perdida, questionando tudo. Pensei em cancelar o show. Mas então percebi 
              que era justamente naquele momento de vulnerabilidade que eu precisava estar no palco. Subi ao 
              palco com lágrimas nos olhos e cantei com toda a verdade que havia em mim naquele momento. 
              Foi um dos shows mais intensos e verdadeiros que já fiz."
            </p>
            <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
          </div>
        </div>

        {/* 11. Texto sobre Músicas e Memórias */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              As canções de Fernanda funcionam como um diário pessoal musical. Cada música registra um 
              momento específico de sua vida, uma emoção particular, uma experiência marcante. Ao revisitá-las, 
              ela viaja no tempo, reconectando-se com versões antigas de si mesma.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 mt-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Tem músicas que eu não consigo cantar sem me emocionar porque elas me levam de volta para 
              aquele momento exato em que foram compostas. É como abrir uma cápsula do tempo e reviver 
              sentimentos que estavam guardados. É doloroso às vezes, mas também é bonito manter essa 
              conexão com minha própria história."
            </p>
            <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
          </div>
        </div>

        {/* 12. Texto sobre Desafios da Carreira Independente */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              As dificuldades financeiras enfrentadas por artistas independentes são uma realidade constante 
              na vida de Fernanda. Sem o apoio de grandes gravadoras, ela precisa ser não apenas artista, 
              mas também produtora, empresária, marketeira e administradora de sua própria carreira.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 mt-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Aprendi que para sobreviver como artista independente, preciso tratar minha carreira como 
              um plano, não apenas como um sonho. Isso significa fazer orçamentos, planejar estratégias, 
              buscar parcerias e ser muito criativa na forma de viabilizar meus projetos. O romantismo da 
              arte precisa andar de mãos dadas com o pragmatismo da realidade."
            </p>
            <p className="text-gray-600 font-semibold">— Fernanda Hofmann</p>
          </div>
        </div>

        {/* 13. Texto sobre Otimismo e Enfrentamento das Adversidades */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Mesmo diante das adversidades, Fernanda mantém uma postura otimista e resiliente. Cada 
              obstáculo é encarado como uma oportunidade de aprendizado e crescimento. Sua determinação 
              em continuar fazendo música, independentemente das dificuldades, inspira outros artistas 
              que trilham caminhos similares.
            </p>
            <p>
              A música é seu espaço pessoal de refúgio e força. É nela que Fernanda encontra a energia 
              para continuar, a coragem para enfrentar desafios e a certeza de que está no caminho certo. 
              "A música não é apenas o que faço, é o que me mantém de pé. É meu porto seguro em meio 
              às tempestades da vida", afirma com convicção.
            </p>
          </div>
        </div>

        {/* 14. Bloco de Conclusão - O verdadeiro espetáculo */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A performance de Fernanda Hofmann vai muito além do que acontece no palco durante os shows. 
              O verdadeiro espetáculo está no processo, na jornada, nos bastidores onde a arte ganha forma 
              e significado.
            </p>
            <p>
              Seu processo artístico envolve coragem para ser vulnerável, técnica apurada pelo estudo e 
              prática constantes, e uma autenticidade que não se aprende em escolas – vem de dentro, do 
              compromisso inabalável de ser verdadeira consigo mesma e com seu público. Fernanda não apenas 
              canta; ela compartilha sua alma, e é isso que torna cada apresentação uma experiência única 
              e inesquecível.
            </p>
          </div>
        </div>

        {/* 15. Galeria em Carrossel */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-8">
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
                <svg className="w-6 h-6 text-orange-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-orange-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-orange-900 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mt-6 text-center">
              Dedicação e naturalidade marcam a apresentação de Fernanda Hofmann – Foto: Thaylon Reis
            </p>
          </div>
        </div>

        {/* Botões de Redes Sociais */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-orange-900 mb-8">
            Acompanhe Fernanda Hofmann
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.instagram.com/fernandahofm/"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </Link>
            
            <Link
              href="https://open.spotify.com/intl-pt/artist/5GiubGuYygmJmH3sroV1Jm?si=BAOmjwmSRhGXsl2zaS8YHQ&nd=1&dlsi=2e5da76a7126460b"
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
