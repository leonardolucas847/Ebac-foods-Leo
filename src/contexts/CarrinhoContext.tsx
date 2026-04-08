// src/contexts/CarrinhoContext.tsx
import { createContext, useContext, useState } from 'react'
import Prato from '../models/Prato'

type CarrinhoContextType = {
  itens: Prato[]
  numeroDeItensNoCarrinho: number
  adicionarItem: (item: Prato) => void
  removerItem: (index: number) => void
  SomarPrecos: (itens: Prato[]) => number
  orderId: string
  finalizarPedido: () => void
  VoltarHome: () => void
}

const CarrinhoContext = createContext<CarrinhoContextType>(
  {} as CarrinhoContextType
)

export const CarrinhoProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const VoltarHome = () => {
    setItens([])
  }
  const [itens, setItens] = useState<Prato[]>([])
  const [orderId, setOrderId] = useState('')
  const finalizarPedido = () => {
    const id = `${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    setOrderId(id)
    setItens([]) // limpa o carrinho depois de finalizar
  }
  const adicionarItem = (item: Prato) => {
    setItens((prev) => [...prev, item])
  }
  const removerItem = (index: number) => {
    setItens((prev) => prev.filter((_, i) => i !== index)) // ← remove pelo índice
  }
  const SomarPrecos = (itens: Prato[]) => {
    return itens.reduce((total, item) => total + item.price, 0)
  }
  const numeroDeItensNoCarrinho = itens.length
  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        SomarPrecos,
        orderId,
        numeroDeItensNoCarrinho,
        VoltarHome,
        finalizarPedido
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => useContext(CarrinhoContext)
