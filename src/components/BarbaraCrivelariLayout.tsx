'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function BarbaraCrivelariLayout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const carrosselImages = [
    {
      src: '/images/publico/Fotos Bárbara/barbara1.jpg',
      alt: 'Bárbara Crivelari tocando violão'
    },
    {
      src: '/images/publico/Fotos Bárbara/barbara2.jpg',
      alt: 'Bárbara Crivelari - Momento 2'
    },
    {
      src: '/images/publico/Fotos Bárbara/barbara3.jpg',
      alt: 'Bárbara Crivelari - Momento 3'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos Bárbara/barbaraCapa.jpg"
              alt="Barbara Crivelari - Foto de Capa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Música como forma de entretenimento – Foto: Cerrado Musical
          </p>
        </div>

        {/* 2. Título Principal */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-8">
            A música que mora no cotidiano
          </h1>
        </div>

        {/* 3. Parágrafos Iniciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A música como forma de prazer e autoconhecimento transcende os palcos e estúdios profissionais. 
              Ela habita os momentos mais simples do dia a dia, oferecendo uma válvula de escape e uma 
              linguagem para expressar o inexprimível.
            </p>
            <p>
              Para muitas pessoas, a relação íntima e não profissional com a música se torna uma jornada 
              de autodescoberta, onde cada acorde tocado e cada nota cantada revelam camadas profundas 
              da própria identidade.
            </p>
          </div>
        </div>

        {/* 4. Bloco de Depoimento - Bárbara Crivelari */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">O Começo de uma Paixão</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "A música sempre foi minha companheira. Comecei no violão e fui explorando outros instrumentos, 
              descobrindo que cada um deles me permitia expressar diferentes aspectos de quem eu sou. 
              A música se tornou minha forma de autoconhecimento, um espelho onde posso me ver 
              verdadeiramente."
            </p>
            <p className="text-gray-600 font-semibold">– Bárbara Crivelari</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            A história de Bárbara com a música começou de forma despretensiosa, mas rapidamente se transformou 
            em algo muito maior. O violão foi apenas o início de uma jornada que a levaria a explorar diversos 
            instrumentos e, mais importante, a explorar a si mesma através da música.
          </p>
        </div>

        {/* 5. Imagem 1 - Carrossel */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
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
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        ? 'bg-purple-900 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Bárbara Crivelari toca violão casualmente – Foto: Acervo pessoal
          </p>
        </div>

        {/* 6. Texto sobre Composição Pessoal */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">A Música como Diário Pessoal</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A composição se tornou para Bárbara uma forma de organizar a mente e aliviar emoções. 
              Cada música que ela cria é como uma página de um diário íntimo, onde sentimentos complexos 
              encontram palavras e melodias que os traduzem perfeitamente.
            </p>
            <p>
              Essa prática de transformar emoções em música não apenas ajuda no processamento de sentimentos, 
              mas também cria um registro pessoal de momentos, pensamentos e transformações ao longo da vida.
            </p>
          </div>
        </div>

        {/* 7. Texto sobre o Poder da Música */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">O Poder Transformador da Música</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A música funciona como uma ferramenta poderosa de conexão, emoção e pertencimento. 
              Ela tem o dom de transformar momentos ordinários em memórias extraordinárias, 
              de conectar pessoas que jamais se conheceram e de criar um senso de comunidade entre desconhecidos.
            </p>
            <p>
              Como a música consegue transformar momentos e sentimentos é uma pergunta que atravessa 
              gerações. Sua capacidade de acessar diretamente nossas emoções mais profundas, 
              de nos fazer sentir compreendidos e de nos transportar no tempo e no espaço permanece 
              como um dos mistérios mais belos da experiência humana.
            </p>
          </div>
        </div>

        {/* 8. Bloco de Depoimento - Luar Chalub */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Música como Companhia e Refúgio</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "Desde criança, a música foi minha companhia mais constante. Nos momentos de solidão, 
              de alegria, de tristeza - sempre havia uma canção que me acompanhava. A música foi e 
              continua sendo meu refúgio, o lugar onde sempre posso voltar e me sentir em casa."
            </p>
            <p className="text-gray-600 font-semibold">– Luar Chalub</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            O início da relação de Luar com a música foi marcado por essa presença constante desde a infância. 
            Mais do que entretenimento, a música se tornou uma amiga fiel, sempre presente nos 
            momentos mais importantes e significativos da vida.
          </p>
        </div>

        {/* 9. Imagem 2 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos Bárbara/barbaraCantando.jpg"
              alt="Luar cantando na igreja"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Luar cantando na igreja, conectada à música e à fé – Foto: Divulgação
          </p>
        </div>

        {/* 10. Texto sobre a Música no Cotidiano */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">A Música na Rotina Diária</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A música como parte da rotina de Luar se manifesta nos momentos mais diversos do dia. 
              Seja ao acordar, durante o trajeto para o trabalho, nos momentos de lazer ou antes de dormir, 
              a música está sempre presente, colorindo cada experiência com diferentes tonalidades emocionais.
            </p>
            <p>
              O impacto da música em sua vida diária vai muito além do prazer auditivo. Ela serve como 
              ponte que conecta as pessoas, facilita a expressão de sentimentos que palavras sozinhas 
              não conseguem transmitir e cria memórias compartilhadas que fortalecem laços afetivos.
            </p>
          </div>
        </div>

        {/* 11. Bloco de Depoimento - Luar sobre a Música como Terapia */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
            <p className="text-lg text-gray-700 italic mb-4">
              "A música é minha válvula de escape. Quando a mente está cheia, quando as preocupações 
              pesam, eu me volto para a música. Seja tocando, cantando ou apenas ouvindo, ela tem o 
              poder de aliviar minha mente e reorganizar meus pensamentos de uma forma que nada mais consegue."
            </p>
            <p className="text-gray-600 font-semibold">– Luar Chalub</p>
          </div>
        </div>

        {/* 12. Imagem 3 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos Bárbara/barbaraCoral.jpg"
              alt="Entre amigos e acordes"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Entre amigos e acordes, cada momento vira memória - Foto: Divulgação
          </p>
        </div>

        {/* 13. Texto sobre Memórias e Conexões */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Memórias em Melodias</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A música como uma forma de reviver memórias tem um poder quase mágico. Uma única canção 
              pode nos transportar instantaneamente para momentos específicos do passado, fazendo-nos 
              reviver emoções com uma intensidade surpreendente.
            </p>
            <p>
              Essa capacidade de fortalecer laços afetivos através da música é especialmente evidente 
              quando compartilhamos experiências musicais com pessoas queridas. Cada canção compartilhada 
              se torna parte da história comum, um código emocional que só aqueles que vivenciaram 
              juntos podem plenamente compreender.
            </p>
          </div>
        </div>

        {/* 14. Texto sobre o Poder Terapêutico da Música */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">A Ciência do Bem-Estar Musical</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Segundo a explicação de Helenyce Veloso, especialista em musicoterapia, o impacto emocional 
              da música vai muito além do subjetivo. Estudos científicos demonstram que a música ativa 
              áreas específicas do cérebro relacionadas ao processamento emocional, memória e prazer.
            </p>
            <p>
              Como a música pode ajudar a regular emoções e melhorar o bem-estar está diretamente 
              relacionado à sua capacidade de influenciar nosso estado fisiológico. A música pode 
              reduzir os níveis de cortisol (hormônio do estresse), aumentar a produção de endorfinas 
              e até mesmo fortalecer o sistema imunológico.
            </p>
          </div>
        </div>

        {/* 15. Imagem 4 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/publico/Fotos Bárbara/barbaraPartitura.jpg"
              alt="Ambiente de musicoterapia"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Ambiente onde Helenyce atende com musicoterapia – Foto: Divulgação
          </p>
        </div>

        {/* 16. Texto sobre a Ciência da Música e seus Benefícios */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Música e Saúde Emocional</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A relação entre música e saúde emocional é reconhecida há milênios em diferentes culturas, 
              mas apenas recentemente a ciência moderna começou a desvendar os mecanismos por trás 
              desse fenômeno. Pesquisas mostram que a música pode ser tão eficaz quanto medicamentos 
              em certos contextos terapêuticos.
            </p>
            <p>
              O impacto da música na redução de estresse e ansiedade, especialmente em ambientes 
              terapêuticos, tem sido amplamente documentado. Hospitais ao redor do mundo incorporam 
              musicoterapia em seus tratamentos, reconhecendo que a música pode acelerar a recuperação, 
              reduzir a necessidade de medicamentos para dor e melhorar significativamente a qualidade 
              de vida dos pacientes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center italic">
              "A música é a linguagem universal da alma. Ela nos conecta com nossos sentimentos mais 
              profundos e com as pessoas ao nosso redor de maneiras que transcendem as palavras. 
              Não importa se você é um profissional ou apenas alguém que canta no chuveiro - 
              a música tem o poder de transformar sua vida."
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
