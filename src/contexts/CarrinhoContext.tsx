// src/contexts/CarrinhoContext.tsx
import { createContext, useContext, useState } from 'react'
import Prato from '../models/Prato'

type CarrinhoContextType = {
  itens: Prato[]
  adicionarItem: (item: Prato) => void
  removerItem: (index: number) => void
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
  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => useContext(CarrinhoContext)
