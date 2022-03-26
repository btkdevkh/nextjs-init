import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>
      <div>
        <Image 
          src='/vercel.svg' 
          alt='vercel logo' 
          width={128}
          height={77}
        />
      </div>

      <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/article/articles'}>List</Link>
      </div>
    </nav>
  )
}
