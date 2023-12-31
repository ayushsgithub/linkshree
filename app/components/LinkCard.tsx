import Image from 'next/image'
import React from 'react'

type Link = {
    href: string;
    title: string;
    image?: string;
}

const LinkCard = ({title, image, href}: Link) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-8">
          {title}
        </h2>
      </div>
    </a>
  )
}

export default LinkCard