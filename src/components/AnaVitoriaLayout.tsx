'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AnaVitoriaLayout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const carrosselImages = [
    {
      src: '/images/publico/Fotos AnaVitoria/anaVitoriaCantando.jpg',
      alt: 'AnaVitória cantando'
    },
    {
      src: '/images/publico/Fotos AnaVitoria/vitoria.jpg',
      alt: 'Vitória Falcão'
    },
    {
      src: '/images/publico/Fotos AnaVitoria/ana.jpg',
      alt: 'Ana Caetano'
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos AnaVitoria/capaAnaVitoria.jpg"
              alt="AnaVitória - Capa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            As tocantinenses que conquistaram o mundo – Foto: Júnior Suzuki
          </p>
        </div>

        {/* 2. Título Principal */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-8">
            O Norte que ecoa em duas vozes: fãs tocantinenses de AnaVitória
          </h1>
        </div>

        {/* 3. Parágrafos Iniciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A música de AnaVitória carrega consigo uma essência que transcende as fronteiras geográficas e culturais do Brasil. 
              Nascidas em Araguaína, no norte do Tocantins, Ana Caetano e Vitória Falcão transformaram suas vivências regionais 
              em canções que conquistaram o país inteiro. Mas é em sua terra natal que a conexão com o público ganha contornos 
              ainda mais profundos e emocionantes.
            </p>
            <p>
              Para quem vive no Tocantins, ouvir AnaVitória é mais do que apreciar boa música – é reconhecer a si mesmo nas 
              histórias cantadas, é sentir orgulho de ver duas conterrâneas levando a cultura e a identidade tocantinense para 
              o Brasil e o mundo. É uma relação que vai além da admiração artística: é pertencimento, é identificação, é a certeza 
              de que o Norte também tem voz potente na música brasileira.
            </p>
          </div>
        </div>

        {/* 4. Bloco de Depoimento - Ana Alice Damaceno */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ana Alice Damaceno, 21 anos, é estudante de jornalismo e fã de AnaVitória há mais de sete anos. Para ela, a música da dupla 
            tem um significado que vai muito além do entretenimento.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Eu me sinto tocantinense quando ouço as músicas de AnaVitória. Sinto como se eu estivesse morando no norte do estado, 
              brincando naqueles campos abertos de Araguaína."
            </p>
            <p className="text-gray-600 font-semibold">– Ana Alice Damaceno</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Esse vínculo emocional com a terra natal através da música demonstra o poder das composições de Ana e Vitória em capturar 
            e transmitir a essência do lugar de onde vieram. Mesmo para quem não nasceu em Araguaína, as canções funcionam como pontes 
            que conectam os tocantinenses à sua própria identidade regional.
          </p>
        </div>

        {/* 5. Imagem 1 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos AnaVitoria/fan1.jpg"
              alt="Ana Alice Damaceno"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Ana Alice é fã da dupla tocantinense a mais de 7 anos – Foto: Júnior Suzuki
          </p>
        </div>

        {/* 6. Bloco de Depoimento - Victor Mikael */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Victor Mikael, 22 anos, também estudante de jornalismo, compartilha de sentimento semelhante. Fã da dupla há cerca de quatro anos, 
            ele destaca como as músicas de AnaVitória fortalecem sua ligação com o Tocantins.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Eu me sinto tocantinense quando ouço as músicas de AnaVitória. Eu me sinto acolhido e eu gosto disso."
            </p>
            <p className="text-gray-600 font-semibold">– Victor Mikael</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Esse acolhimento que Victor menciona reflete algo maior: a capacidade da música de criar espaços de identificação e conforto. 
            Para os tocantinenses, ouvir AnaVitória é como voltar para casa, mesmo estando fisicamente longe dela.
          </p>
        </div>

        {/* 7. Bloco de Depoimento - Vitor sobre Shows em Palmas */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Quando AnaVitória se apresenta em Palmas, capital do Tocantins, a experiência ganha contornos especiais. Victor Mikael descreve a diferença:
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Quando elas estão aqui elas conseguem entregar uma coisa diferente. É muito massa porque a gente percebe que elas se sentem 
              realmente em casa e a plateia também é muito diferente, só tocantinenses. Acho bem legal e especial por conta disso."
            </p>
            <p className="text-gray-600 font-semibold">– Victor Mikael</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Essa "entrega diferente" que Victor menciona não é mera impressão. Quando artistas se apresentam em suas terras natais, há uma troca 
            energética única entre palco e plateia. É o reconhecimento mútuo, a cumplicidade de compartilhar as mesmas referências culturais, 
            a emoção de estar entre os seus.
          </p>
        </div>

        {/* 8. Imagem 2 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos AnaVitoria/fan2.jpg"
              alt="Victor em show da AnaVitória"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Vitor prestigia show da dupla em Palmas- TO - Foto: Divulgação
          </p>
        </div>

        {/* 9. Bloco de Depoimento - Mariana Gabriela Leão */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mariana Gabriela Leão, 20 anos, estudante de jornalismo, expressa com clareza o orgulho de ver AnaVitória representando o Tocantins nacionalmente.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Elas fazem com que eu me sinta muito orgulhosa de ser tocantinense, de saber que elas representam bem o Tocantins no Brasil inteiro."
            </p>
            <p className="text-gray-600 font-semibold">– Mariana Gabriela Leão</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Esse orgulho é especialmente significativo para quem está longe do estado. Mariana destaca a importância das músicas da dupla 
            para tocantinenses que vivem em outras regiões: "Principalmente para os tocantinenses que estão em outros estados, que vão nessas 
            festas de AnaVitória e se unem. Acho muito importante a representatividade, as pessoas fazerem música do cerrado. É muito legal ver 
            uma cantora do Tocantins, da mesma cidade que você, cantando suas músicas e sendo conhecida nacionalmente", completa.
          </p>
        </div>

        {/* 10. Imagem 3 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos AnaVitoria/fan3.jpg"
              alt="Mariana Gabriela Leão"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Mariana Gabriela (à esquerda) durante show de AnaVitória em Aracaju – Foto: Divulgação
          </p>
        </div>

        {/* 11. Texto sobre a Identidade e Representatividade de AnaVitória */}
        {/* 11. Texto sobre a Identidade e Representatividade de AnaVitória */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A relação entre AnaVitória e seus fãs tocantinenses revela uma questão fundamental sobre identidade e representatividade 
              na música brasileira. Durante muito tempo, as narrativas musicais do país foram dominadas por perspectivas dos grandes 
              centros urbanos do Sul e Sudeste. Ver duas artistas do Norte alcançarem projeção nacional significa, para muitos tocantinenses, 
              finalmente se verem representados no cenário cultural brasileiro.
            </p>
            <p>
              As músicas da dupla não apenas falam sobre o Tocantins de forma explícita, mas carregam em suas melodias, arranjos e temáticas 
              a sutileza das experiências vividas no cerrado. É uma música que nasce da terra vermelha, dos campos abertos, do calor 
              característico da região, das histórias que permeiam o cotidiano tocantinense.
            </p>
          </div>
        </div>

          {/* 12. Galeria (Carrossel) */}
          <div className="mt-20 mb-16">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
              Galeria
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={carrosselImages[currentImageIndex].src}
                    alt={carrosselImages[currentImageIndex].alt}
                    fill
                    className={`object-contain transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
                
                {/* Botão Anterior */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Botão Próximo */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carrosselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-purple-900 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Dupla tocantinense AnaVitória carregam a história do Tocantins – Foto: Júnior Suzuki
              </p>
            </div>
          </div>

          {/* 14. Texto sobre a Conexão entre AnaVitória e o Tocantins */}
          <div className="space-y-12 mb-20 max-w-4xl mx-auto">
            <div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A ligação de AnaVitória com o Tocantins vai além de simplesmente terem nascido no estado. Suas músicas carregam histórias, 
                  memórias e sensações que são profundamente tocantinenses. Cada composição é como um retrato sonoro de experiências vividas no cerrado, 
                  de relacionamentos construídos sob o sol quente do Norte, de sonhos gestados em uma região muitas vezes esquecida pelo resto do país.
                </p>
                <p>
                  Para os fãs tocantinenses, essa autenticidade é inegável e preciosa. Não se trata de músicas sobre o Tocantins feitas por 
                  observadores externos, mas de canções nascidas das entranhas da experiência de viver nessa terra. É música que respira o mesmo ar, 
                  que conhece as mesmas paisagens, que entende as particularidades culturais da região.
                </p>
                <p>
                  Essa conexão genuína faz com que cada show, cada música nova, cada conquista de AnaVitória seja sentida pelos tocantinenses como 
                  uma vitória coletiva. É como se parte deles também estivesse ali, subindo nos palcos, recebendo os aplausos, mostrando ao Brasil 
                  que o Tocantins tem muito a dizer – e cantar.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  O impacto de AnaVitória transcende o entretenimento. A dupla abriu portas para que outros artistas tocantinenses acreditem na 
                  possibilidade de alcançar projeção nacional sem precisar negar suas origens. Elas provaram que é possível cantar a partir do Tocantins, 
                  falar sobre o Tocantins, e ainda assim conquistar o Brasil inteiro.
                </p>
                <p>
                  Para jovens músicos do estado, AnaVitória representa inspiração e caminho possível. Se Ana e Vitória conseguiram, por que outros 
                  tocantinenses não conseguiriam? Esse efeito multiplicador é, talvez, um dos maiores legados da dupla para sua terra natal.
                </p>
                <p>
                  Mais do que isso, AnaVitória contribuiu para mudar a forma como o próprio Tocantins se enxerga. Em um estado jovem (criado apenas em 1988), 
                  ainda em processo de construção de sua identidade cultural, ter artistas de projeção nacional nascidas ali fortalece o sentimento de 
                  pertencimento e orgulho regional.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-400 mt-8">
                <p className="text-lg text-gray-700 italic mb-4">
                  "O Norte que ecoa em duas vozes não é apenas uma expressão poética – é uma realidade vivida diariamente por fãs como Ana Alice, 
                  Victor e Mariana. É a certeza de que sua terra, sua cultura, suas histórias merecem ser cantadas e celebradas."
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Quando Ana Caetano e Vitória Falcão sobem ao palco, elas levam consigo não apenas suas vozes individuais, mas o eco de todo um estado 
                que finalmente se vê representado na música brasileira. E para os tocantinenses que as acompanham, cada canção é um lembrete: o Norte tem voz, 
                tem história, tem música – e essa música ecoa em duas vozes que o Brasil inteiro aprendeu a admirar.
              </p>
            </div>
          </div>

          {/* Botões de Redes Sociais */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-purple-900 mb-8">
              Acompanhe AnaVitória
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.instagram.com/anavitoria/"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </Link>
              
              <Link
                href="https://open.spotify.com/intl-pt/artist/1sPg5EHuQXTMElpZ4iUgXe"
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