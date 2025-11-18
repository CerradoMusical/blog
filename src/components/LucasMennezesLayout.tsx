'use client'

import React from 'react'
import Image from 'next/image'

export default function LucasMennezesLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-8">
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/images/perfil/Fotos Lucas/Capa.jpg"
              alt="Lucas Mennezes - Foto de Capa"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-3 max-w-5xl mx-auto">
            Lucas conta sobre sua trajetória de carreira – Foto: Divulgação
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 2. Título Principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 mb-4">
              De Araguatins pra cena musical tocantinense: a jornada musical de Lucas Mennezes
            </h1>
            <div className="w-20 h-1 bg-indigo-400 rounded mx-auto mt-6"></div>
          </div>

          {/* 3. Parágrafos Iniciais */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Lucas Mennezes é um artista tocantinense que vem conquistando espaço na cena musical do estado. 
              Natural de Araguatins, no extremo norte do Tocantins, Lucas cresceu em um ambiente onde a música 
              sempre esteve presente, influenciado principalmente pela paixão musical de sua família.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde cedo, a música fez parte da vida de Lucas. A influência familiar foi fundamental para despertar 
              seu interesse pela arte. Seus primeiros passos na música aconteceram ainda na adolescência, quando 
              integrou a banda Três Acordes, formada por amigos que compartilhavam o mesmo sonho de levar sua música 
              para além das fronteiras da cidade natal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Foi nesse período que Lucas começou a desenvolver suas habilidades como compositor e intérprete, 
              experimentando diferentes estilos e encontrando sua própria voz artística. A banda Três Acordes 
              se tornou o laboratório perfeito para suas primeiras composições e apresentações públicas.
            </p>
          </div>

          {/* 4. Imagem 1 - inicioLucas.jpg */}
          <div className="my-12">
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src="/images/perfil/Fotos Lucas/inicioLucas.jpg"
                alt="O início de tudo"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
              O início de tudo – Foto: Divulgação
            </p>
          </div>

          {/* 5. Depoimento de Lucas - Primeira Música */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-400">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O grande marco na carreira de Lucas veio com o lançamento de sua música "Seu Lugar". 
              A canção rapidamente conquistou o público tocantinense e ultrapassou as fronteiras do estado, 
              alcançando números expressivos nas plataformas de streaming.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"Quando 'Seu Lugar' chegou a 100 mil plays no Spotify, eu não acreditei. Era um sonho que eu 
              tinha desde que comecei a fazer música, e ver as pessoas de diferentes lugares ouvindo e se 
              identificando com algo que eu criei foi indescritível"</em>, conta Lucas emocionado.
            </p>
          </div>

          {/* 6. Depoimento de Lucas - Período de Descoberta */}
          <div className="space-y-6 my-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Antes do sucesso digital, Lucas passou por um importante período de aprendizado tocando em barzinhos 
              de Palmas e outras cidades do Tocantins. Essas apresentações intimistas foram fundamentais para seu 
              desenvolvimento artístico.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"Tocar em barzinhos me ensinou muito sobre conexão com o público. Ali, cara a cara com as pessoas, 
              eu aprendi a ler as reações, a entender o que funciona e o que não funciona. Cada show era uma aula 
              diferente"</em>, relembra o artista.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Foi nesses espaços menores que Lucas aperfeiçoou sua capacidade de criar intimidade através da música, 
              desenvolvendo o carisma e a presença de palco que hoje caracterizam suas apresentações.
            </p>
          </div>

          {/* 7. Imagem 2 - lucasCantando.jpg */}
          <div className="my-12">
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src="/images/perfil/Fotos Lucas/lucasCantando.jpg"
                alt="Lucas em suas primeiras apresentações"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
              Lucas em suas primeiras apresentações – Foto: Divulgação
            </p>
          </div>

          {/* 8. Texto sobre Participação em Festivais */}
          <div className="space-y-6 my-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              A participação no Femup (Festival de Música Popular de Paraíso) marcou um ponto de virada importante 
              na carreira de Lucas. O festival não apenas proporcionou visibilidade, mas também trouxe oportunidades 
              concretas para a produção de suas músicas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"O Femup foi essencial para minha carreira. Além da competição em si, foi lá que conheci produtores, 
              outros músicos e pessoas que acreditaram no meu trabalho e me ajudaram a tirar minhas ideias do papel. 
              Muitas das músicas que tenho hoje só existem por causa das conexões que fiz em festivais como esse"</em>, 
              explica Lucas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Festivais regionais têm sido fundamentais para artistas independentes do Tocantins, oferecendo não apenas 
              um palco para apresentações, mas também um espaço de networking e possibilidades de produção musical que 
              muitas vezes não estariam acessíveis de outra forma.
            </p>
          </div>

          {/* 9. Texto sobre Composição */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl my-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Quando questionado sobre seu processo de composição, Lucas revela uma abordagem bastante orgânica e livre. 
              Diferente de muitos compositores que seguem métodos estruturados, Lucas prefere deixar a inspiração fluir 
              naturalmente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"Eu não tenho regras para compor. Às vezes a música vem completa na minha cabeça, outras vezes começa 
              com uma frase que ouvi na rua, ou uma melodia que surge do nada. Eu anoto tudo e depois vejo o que faz 
              sentido juntar. É um processo bem livre, sem amarras"</em>, conta o compositor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Essa liberdade criativa se reflete na diversidade de suas composições, que transitam entre diferentes 
              estilos e temáticas, sempre mantendo a autenticidade que caracteriza seu trabalho.
            </p>
          </div>

          {/* 10. Texto sobre Desafios */}
          <div className="space-y-6 my-8">
            <h2 className="text-2xl font-bold text-indigo-900">
              Desafios
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Apesar do talento e da dedicação, Lucas enfrenta os mesmos desafios que a maioria dos artistas 
              independentes no Brasil: a falta de recursos financeiros para produção e divulgação musical.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"O maior desafio é transformar ideias em produto final. Eu tenho várias músicas prontas na minha 
              cabeça, mas gravar com qualidade, fazer uma boa produção, investir em divulgação... tudo isso custa caro. 
              Muitas vezes tenho que escolher entre comer ou gravar uma música"</em>, desabafa o artista.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A realidade financeira é um obstáculo constante. Sem apoio de gravadoras ou patrocínios significativos, 
              Lucas, como muitos artistas independentes, precisa custear todo o processo de produção com recursos próprios, 
              muitas vezes limitando sua capacidade de criar e lançar novas músicas na velocidade que gostaria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"Às vezes sinto que poderia estar produzindo muito mais se tivesse o apoio necessário. Mas não desisto. 
              Cada música que consigo lançar é uma vitória"</em>, afirma Lucas com determinação.
            </p>
          </div>

          {/* 11. Imagem 3 - lucasTocando.jpg */}
          <div className="my-12">
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src="/images/perfil/Fotos Lucas/lucasTocando.jpg"
                alt="A música sempre esteve em sua vida"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
              A música sempre esteve em sua vida – Foto: Divulgação
            </p>
          </div>

          {/* 12. Texto sobre Cena Musical no Tocantins */}
          <div className="space-y-6 my-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Lucas se vê como parte de um movimento maior que está acontecendo no Tocantins. A cena musical do estado 
              tem crescido consistentemente, com artistas independentes ganhando espaço e reconhecimento tanto local 
              quanto nacionalmente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <em>"É emocionante ver o Tocantins sendo reconhecido musicalmente. Quando comecei, eram poucos artistas 
              fazendo música autoral. Hoje temos uma cena forte, diversa, com gente fazendo rock, MPB, sertanejo autoral, 
              rap... É um movimento que está crescendo e eu tenho orgulho de fazer parte disso"</em>, celebra Lucas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              O fortalecimento da cena musical tocantinense não é apenas importante para os artistas individualmente, 
              mas representa um movimento cultural mais amplo de afirmação da identidade regional e criação de 
              oportunidades para novos talentos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lucas acredita que a união entre os artistas locais e o apoio mútuo são fundamentais para continuar 
              expandindo os horizontes da música tocantinense. <em>"Sozinhos vamos rápido, juntos vamos longe. 
              Essa é a filosofia que precisamos ter"</em>, conclui.
            </p>
          </div>

          {/* 13. Convite para Acompanhar Lucas */}
          <div className="max-w-4xl mx-auto text-center my-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A trajetória de Lucas Mennezes é inspiradora e está apenas começando. Acompanhe suas redes sociais 
              para não perder os próximos lançamentos e descobrir mais sobre sua música.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/mennezes.lucas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              
              <a 
                href="https://open.spotify.com/intl-pt/track/0FkPf3yhFjWEjldQ1UTkCm?si=7961d7fa136b4a31&nd=1&dlsi=388f5e73b5e64c80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Ouça no Spotify
              </a>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              De Araguatins para o Tocantins, de lá para o Brasil. A música de Lucas não tem fronteiras.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}