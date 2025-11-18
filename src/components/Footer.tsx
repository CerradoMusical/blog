import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Logo e descrição */}          <div className="text-center md:text-left">
            <img
              src="/blog/images/projeto/logo.png"
              alt="Cerrado Musical"
              width="200"
              height="60"
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
              cerradomusical.blog@gmail.com
            </p>
            <p className="text-blue-100 text-sm">
              Entre em contato conosco!
            </p>
          </div>
        </div>

        {/* Linha divisória e copyright */}        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 Cerrado Musical. Feito com carinho para conectar você com a música.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer