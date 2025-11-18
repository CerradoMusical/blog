'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projeto1Mais1Layout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const carrosselImages = [
    {
      src: '/images/bastidores/Projeto 1Mais1/1mais1primeira.jpg',
      alt: 'Projeto 1+1 - Foto 1'
    },
    {
      src: '/images/bastidores/Projeto 1Mais1/1mais1segunda.jpg',
      alt: 'Projeto 1+1 - Foto 2'
    },
    {
      src: '/images/bastidores/Projeto 1Mais1/1mais1terceira.jpg',
      alt: 'Projeto 1+1 - Foto 3'
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        
        {/* 1. Foto de Capa */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/bastidores/Projeto 1Mais1/1mais1Capa.jpg"
              alt="Projeto 1+1 - Capa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            O pagode tocantinense – Foto: Regiane Rocha
          </p>
        </div>

        {/* 2. Título Principal */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-8">
            O show antes do show: bastidores do Projeto 1+1
          </h1>
        </div>

        {/* 3. Parágrafos Iniciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              No coração do Tocantins, surge uma história de amizade e música que transcende o comum. 
              O Projeto 1+1 nasceu da união de quatro amigos com um sonho em comum: levar o pagode 
              tocantinense para além das fronteiras do estado.
            </p>
            <p>
              Formado por Diego Lemos, ZH Maciel, Gabriel Lima e mais um talentoso músico, o grupo 
              começou sua trajetória em 2019, quando decidiram transformar suas jam sessions informais 
              em algo maior, mais estruturado e profissional.
            </p>
            <p>
              O que começou como encontros despretensiosos entre amigos rapidamente evoluiu para uma 
              banda reconhecida no cenário musical tocantinense, conquistando fãs e abrindo portas que 
              pareciam inalcançáveis para um grupo independente.
            </p>
          </div>
        </div>

        {/* 4. Bloco de Depoimento - Diego Lemos */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400 mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              "O nome Projeto 1+1 veio da ideia de que quando você junta dois talentos, duas energias, 
              o resultado não é apenas dois, mas algo exponencial. Queríamos um nome que representasse 
              essa soma de esforços e paixões. Nosso objetivo inicial era simples: fazer música de qualidade 
              e compartilhar nossa arte com o maior número de pessoas possível."
            </p>
            <p className="text-gray-600 font-semibold">– Diego Lemos, membro fundador do Projeto 1+1</p>
          </div>
        </div>

        {/* 5. Imagem 1 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/bastidores/Projeto 1Mais1/1mais1Show.jpg"
              alt="Projeto 1+1 em apresentação"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Quatro amigos, um só projeto – Foto: Divulgação
          </p>
        </div>

        {/* 6. Texto sobre Preparação para o Show */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Antes de cada apresentação, o Projeto 1+1 passa por um meticuloso processo de preparação. 
              Os ensaios não são apenas momentos de prática técnica, mas verdadeiras sessões de alinhamento 
              artístico e emocional entre os membros da banda.
            </p>
            <p>
              A escolha do repertório é feita com cuidado estratégico, considerando o público, o local 
              e o momento. Cada música é selecionada para criar uma jornada emocional que conecte 
              profundamente com quem assiste.
            </p>
            <p>
              A organização da equipe técnica e de apoio é fundamental. Desde os equipamentos de som 
              até a iluminação, cada detalhe é planejado para garantir que a experiência ao vivo reflita 
              a qualidade e a paixão que a banda coloca em sua música.
            </p>
          </div>
        </div>

        {/* 7. Bloco de Depoimento - ZH Maciel e Gabriel Lima */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "A escolha das músicas é um processo colaborativo. Sentamos juntos, ouvimos sugestões 
                de todos e pensamos em como criar uma narrativa através do show. Não é só tocar músicas 
                aleatórias, é contar uma história, criar uma experiência."
              </p>
              <p className="text-gray-600 font-semibold">– ZH Maciel, membro do Projeto 1+1</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <p className="text-lg text-gray-700 italic mb-4">
                "Nos ensaios, testamos arranjos, experimentamos harmonias diferentes, buscamos sempre 
                melhorar. Cada apresentação é única porque sempre estamos evoluindo, aprendendo. 
                A montagem do show é quase como montar um quebra-cabeça onde cada peça precisa se 
                encaixar perfeitamente."
              </p>
              <p className="text-gray-600 font-semibold">– Gabriel Lima, membro do Projeto 1+1</p>
            </div>
          </div>
        </div>

        {/* 8. Texto sobre a Logística de Bastidores */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A organização por trás de cada show do Projeto 1+1 é impressionante. A equipe técnica 
              trabalha em sincronia perfeita com os músicos, garantindo que cada aspecto da apresentação 
              funcione sem falhas.
            </p>
            <p>
              Cada membro da banda tem papéis bem definidos, não apenas no palco, mas também na gestão 
              do projeto. Diego cuida da produção artística, ZH da logística, Gabriel dos arranjos musicais, 
              criando um sistema eficiente onde todos contribuem para o sucesso coletivo.
            </p>
            <p>
              A equipe auxiliar, composta por técnicos de som, iluminação e apoio visual, é tratada 
              como parte integral do projeto. Essa colaboração harmoniosa é o que permite ao Projeto 1+1 
              entregar shows de alta qualidade consistentemente.
            </p>
          </div>
        </div>

        {/* 9. Texto sobre Conquistas */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Em 2022, o Projeto 1+1 alcançou um marco importante em sua trajetória: a gravação de seu 
              primeiro DVD. Este projeto audiovisual registrou não apenas as músicas, mas a essência 
              e a energia contagiante que a banda transmite em suas apresentações ao vivo.
            </p>
            <p>
              O ano de 2023 trouxe a tão sonhada turnê, levando o som do Projeto 1+1 para diversas 
              cidades do Tocantins e estados vizinhos. Cada apresentação foi uma oportunidade de 
              conquistar novos fãs e consolidar a presença da banda no cenário musical regional.
            </p>
            <p>
              Os convites especiais começaram a chegar. Participações em eventos de grandes nomes 
              como Henrique e Juliano e Nattan validaram o trabalho e o talento do grupo, abrindo 
              portas para colaborações ainda maiores e reconhecimento nacional.
            </p>
          </div>
        </div>

        {/* 10. Galeria */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">
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
                <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-amber-900 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mt-6 text-center">
              Projeto 1+1 representa o pagode tocantinense no show de Nattan, em Palmas – Foto: Divulgação
            </p>
          </div>
        </div>

        {/* 11. Texto sobre Desafios e Independência */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Como qualquer banda independente, o Projeto 1+1 enfrentou e continua enfrentando diversos desafios. 
              Portas fechadas, propostas financeiras abaixo do valor do trabalho e a dificuldade de se estabelecer 
              em um mercado competitivo são realidades constantes.
            </p>
            <p>
              No entanto, ser independente também trouxe liberdade criativa e autonomia nas decisões. A banda 
              desenvolveu um sistema interno de divisão de trabalho onde cada membro contribui não apenas 
              musicalmente, mas também na gestão, produção e divulgação do projeto.
            </p>
            <p>
              Essa independência forjou um grupo resiliente, capaz de se adaptar rapidamente às mudanças 
              do mercado musical e de tomar decisões estratégicas que beneficiam diretamente o crescimento 
              sustentável do projeto.
            </p>
          </div>
        </div>

        {/* 12. Texto sobre o Sucesso do Projeto */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              O que começou como um projeto temporário entre amigos transformou-se em uma banda consolidada 
              e reconhecida no cenário musical tocantinense. O Projeto 1+1 provou que com dedicação, talento 
              e trabalho colaborativo, é possível construir algo duradouro e significativo.
            </p>
            <p>
              Hoje, o grupo é referência quando se fala em pagode de qualidade no Tocantins. Sua trajetória 
              inspira outros músicos locais a perseguirem seus sonhos e mostra que o talento regional pode 
              competir de igual para igual com produções de grandes centros urbanos.
            </p>
            <p>
              A transformação do Projeto 1+1 é uma história de superação, amizade e paixão pela música. 
              Mais do que números e conquistas, o verdadeiro sucesso está na capacidade de emocionar pessoas 
              e criar memórias através da arte musical.
            </p>
          </div>
        </div>

        {/* Botões de Redes Sociais */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-8">
            Acompanhe o Projeto 1+1
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.instagram.com/1mais1projeto/"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </Link>
            
            <Link
              href="https://open.spotify.com/intl-pt/artist/36uxDVmNawSCAfPBKsZXHu"
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