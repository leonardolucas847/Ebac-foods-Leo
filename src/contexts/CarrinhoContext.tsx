// src/contexts/CarrinhoContext.tsx
import { createContext, useContext, useState } from 'react'
import Prato from '../models/Prato'

type CarrinhoContextType = {
  itens: Prato[]
  adicionarItem: (item: Prato) => void
  removerItem: (index: number) => void
  SomarPrecos: (itens: Prato[]) => number
}

const CarrinhoContext = createContext<CarrinhoContextType>(
  {} as CarrinhoContextType
)

export const CarrinhoProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [itens, setItens] = useState<Prato[]>([])

  const adicionarItem = (item: Prato) => {
    setItens((prev) => [...prev, item])
  }
  const removerItem = (index: number) => {
    setItens((prev) => prev.filter((_, i) => i !== index)) // ← remove pelo índice
  }
  const SomarPrecos = (itens: Prato[]) => {
    return itens.reduce((total, item) => total + item.price, 0)
  }
  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionarItem, removerItem, SomarPrecos }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => useContext(CarrinhoContext)
