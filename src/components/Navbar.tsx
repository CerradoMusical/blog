'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/tema/perfil', label: 'Perfil' },
    { href: '/tema/bastidores', label: 'Bastidores' },
    { href: '/tema/publico', label: 'Público' },
    { href: '/sobre', label: 'Sobre' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (    <nav className="navbar-fixed bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">          {/* Logo */}
          <Link href="/" className="flex items-center ml-8">
            <Image
              src="/images/projeto/logo.png"
              alt="Cerrado Musical"
              width={350}
              height={100}
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar