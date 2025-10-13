import React from 'react'

interface RichTextProps {
  content: string
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  // Parse content with basic markdown-like formatting
  const parseContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-secondary-900 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      if (paragraph.trim() === '') {
        return <br key={index} />
      }
      return (
        <p key={index} className="text-secondary-700 mb-4 leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="prose max-w-none">
      {parseContent(content)}
    </div>
  )
}

export default RichText