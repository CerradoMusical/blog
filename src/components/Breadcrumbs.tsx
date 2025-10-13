import React from 'react'
import Link from 'next/link'
import { BreadcrumbItem } from '@/types'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-secondary-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-secondary-400">&gt;</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary-900 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs