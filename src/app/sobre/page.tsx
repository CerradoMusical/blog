import React from 'react'
import Image from 'next/image'

const SobrePage = () => {
  return (
    <div className="container py-8">
      {/* Logo Centralizado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Portal Editorial
        </h1>
        <p className="text-lg text-secondary-600">
          Sobre nossa missão e valores
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Foto pequena à esquerda */}
          <div className="flex-shrink-0">
            <Image
              src="https://via.placeholder.com/200x200/3b82f6/ffffff?text=Sobre+Nós"
              alt="Sobre nós"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* Texto institucional */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Nossa História
            </h2>
            
            <div className="prose max-w-none text-secondary-700 space-y-4">
              <p>
                O Portal Editorial nasceu da necessidade de criar um espaço dedicado 
                a conteúdo de qualidade, onde diferentes perspectivas e temas podem 
                coexistir em harmonia.
              </p>
              
              <p>
                Nosso time é composto por profissionais apaixonados por criar, 
                compartilhar conhecimento e conectar pessoas através de histórias 
                autênticas e conteúdo relevante.
              </p>
              
              <p>
                Acreditamos que cada história merece ser contada e cada leitor 
                merece ter acesso a informações de qualidade, apresentadas de 
                forma clara e envolvente.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mt-8 mb-4">
                Nossa Missão
              </h3>
              
              <p>
                Conectar pessoas através de conteúdo autêntico e relevante, 
                promovendo o conhecimento e inspirando transformações positivas 
                na vida de nossos leitores.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mt-8 mb-4">
                Nossos Valores
              </h3>
              
              <ul className="list-disc list-inside space-y-2">
                <li>Autenticidade em cada publicação</li>
                <li>Qualidade acima de quantidade</li>
                <li>Respeito à diversidade de opiniões</li>
                <li>Transparência em nossos processos</li>
                <li>Compromisso com nossos leitores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobrePage