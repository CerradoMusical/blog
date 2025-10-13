import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-700 mb-4">
          Página não encontrada
        </h2>
        <p className="text-secondary-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}