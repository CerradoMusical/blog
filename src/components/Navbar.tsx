'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/tema/perfil', label: 'Perfil' },
    { href: '/tema/bastidores', label: 'Bastidores' },
    { href: '/tema/publico', label: 'Público' },
    { href: '/sobre', label: 'Sobre Nós' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="navbar-fixed bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center justify-center py-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar