import React from 'react'
import Image from 'next/image'

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 pt-8 pb-16">        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Sobre o Cerrado Musical
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a história por trás da nossa paixão pela música
          </p>
          <div className="w-20 h-1 bg-yellow-400 rounded mx-auto mt-6"></div>
        </div>        {/* Conteúdo Principal */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Foto da Ana Julia */}
            <div className="text-center md:text-left">
              <div className="inline-block relative">
                <Image
                  src="/images/projeto/anaJulia.JPG"
                  alt="Ana Julia - Criadora do Cerrado Musical"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Texto sobre */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Oi, tudo bem?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sou Ana Júlia Mota, tenho 22 anos e sou jornalista, criadora e editora do Cerrado
                  Musical. Sempre gostei de música, mas foi nos últimos cinco anos que essa paixão
                  realmente ganhou força na minha vida. Gosto especialmente de pop e MPB, mas
                  escuto um pouco de tudo, acredito que cada som carrega uma história, uma
                  emoção e uma forma única de se conectar com as pessoas.
                  Mais do que um hobby, a música se tornou uma maneira de olhar o mundo, de
                  entender o que nos move e o que nos une. E foi esse olhar que me inspirou a criar
                  este espaço.

                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Quem Somos
                </h2>
                <p>
                  Este site nasceu do desejo de contar as <strong>histórias da cena musical do Tocantins</strong>,
                  mostrar os bastidores, valorizar os artistas locais e dar voz também a quem está do
                  outro lado do palco, o público.

                </p>
                
                <p>
                  Aqui, a proposta é juntar comunicação e música de um jeito leve e próximo, criando
                    um espaço de diálogo entre artistas, fãs e todos que acreditam na força da cultura
                    tocantinense. Cada reportagem e entrevista busca mostrar o quanto a produção
                    musical do estado é rica, diversa e cheia de identidade.

                </p>
                
                <p>
                  Nosso propósito é fortalecer a cena musical do Tocantins, ajudando a construir
                    visibilidade para quem faz arte com paixão e autenticidade. Este é um espaço feito
                    para quem ama música, para quem vive, sente e se inspira com cada acorde.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="font-bold text-blue-900 mb-2">Nossa Filosofia</h3>
                <p className="text-gray-700 italic">
                  "Acreditamos que a música é a linguagem universal que conecta corações, 
                  e nosso papel é ser a ponte entre os artistas e seus fãs."
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Valores */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-12">
              O que nos move
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h4 className="font-bold text-blue-900 mb-3">Autenticidade</h4>
                <p className="text-gray-600">
                  Conteúdo real, entrevistas genuínas e histórias verdadeiras que tocam o coração.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                </div>
                <h4 className="font-bold text-blue-900 mb-3">Qualidade</h4>
                <p className="text-gray-600">
                  Cada matéria é cuidadosamente produzida com atenção aos detalhes e respeito aos artistas.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
                <h4 className="font-bold text-blue-900 mb-3">Conexão</h4>
                <p className="text-gray-600">
                  Aproximamos fãs e artistas através de histórias que inspiram e emocionam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}