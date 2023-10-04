import Image from 'next/image'
import data  from "@/data.json"

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">


    <Image
      priority
      className="rounded-full"
      alt={data.name}
      src={data.avatar}
      width={96}
      height={96}
    />
    <h1 className="font-bold mt-4 mb-8 text-xl text-black">{data.name}</h1>
    {/* {data.links.map((link) => (
      <LinkCard key={link.href} {...link} />
    ))}
    <div className="flex items-center gap-4 mt-8 text-white">
      {data.socials.map((social) => (
        <a
          aria-label={`${social.title} link`}
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.href.includes('twitter') ? (
            <TwitterIcon />
          ) : social.href.includes('github') ? (
            <GitHubIcon />
          ) : null}
        </a>
      ))}
    </div> */}
  </div>
  )
}
