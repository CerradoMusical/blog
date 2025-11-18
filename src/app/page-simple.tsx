'use client'

import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section com Banner Musical */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b45309 75%, #92400e 100%)'
        }}
      >
        {/* Background com notas musicais */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/projeto/banner.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20"></div>
        
        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/projeto/logo.png"
              alt="Cerrado Musical"
              width={450}
              height={150}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Seção simples */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ✨ Bem-vindo ao Cerrado Musical
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Portal de conteúdo musical em desenvolvimento
          </p>
        </div>
      </section>
    </div>
  )
}
