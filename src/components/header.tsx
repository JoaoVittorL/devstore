import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex itens-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/'} className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 py-5 px-3 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          ></input>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-zinc-500" />
          <span className="text-sm text-zinc-500">Cart (0)</span>
        </div>
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
