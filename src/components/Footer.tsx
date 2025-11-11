import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Logo e descrição */}          <div className="text-center md:text-left">
            <Image
              src="/images/projeto/logo.png"
              alt="Cerrado Musical"
              width={200}
              height={60}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="text-blue-100 text-sm leading-relaxed">
              Portal de conteúdo musical com entrevistas exclusivas, bastidores únicos e histórias que conectam você com seus artistas favoritos.
            </p>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contato</h3>
            <p className="text-blue-100 text-sm mb-2">
              📧 contato@gerralmusical.com
            </p>
            <p className="text-blue-100 text-sm mb-4">
              📱 Entre em contato conosco!
            </p>
            
            {/* Redes sociais placeholder */}
            <div className="flex justify-center md:justify-end space-x-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 text-sm font-bold">
                IG
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 text-sm font-bold">
                TW
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Cerrado Musical. Feito com 💙 para conectar você com a música.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer