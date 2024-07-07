import Link from 'next/link'
import Image from 'next/image'
import CardWidget from './cart-widget'
import SearchForm from './search-form'

const Header = () => {
  return (
    <div className="flex itens-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/'} className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CardWidget />
        <div className="w-px h-4 bg-zinc-700" />
        <Link href={'/'} className="flex items-center gap-2 hover:underline">
          <span className="text-sm text-zinc-500">Account</span>
          <Image
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            src="https://github.com/JoaoVittorL.png"
            alt="Joao Vittor Lopes dos Santos"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
