import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-8">
      <div className="border-b border-gray-400 w-full mb-2"/>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}
