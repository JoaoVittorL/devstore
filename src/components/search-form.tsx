'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q

    console.log(query)

    if (!query) return

    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      role="search"
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 py-5 px-3 ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        placeholder="Buscar produtos..."
        name="q"
        defaultValue={query || ''}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      ></input>
    </form>
  )
}

export default SearchForm
