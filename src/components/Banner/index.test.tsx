import { fireEvent, render, screen } from '@testing-library/react'
import Banner from './index'
import { BrowserRouter } from 'react-router-dom'
import { CarrinhoProvider } from '../../contexts/CarrinhoContext'

test('renderiza o banner no home', () => {
  render(<Banner type={'home'} />)
  expect(
    screen.getByText(/Viva experiências gastronômicas /i)
  ).toBeInTheDocument()
})

describe('Banner', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CarrinhoProvider>
          <Banner type={'perfil'} />{' '}
        </CarrinhoProvider>
      </BrowserRouter>
    )
  })
  test('renderiza o banner no perfil apos o click', () => {
    screen.debug()
    expect(screen.getByText(/La Dolce Vita Trattoria/i)).toBeInTheDocument()
  })
  test('renderiza o carrinho apos o click', () => {
    const carrinho = screen.getByRole('button', {
      name: /0 produto\(s\) no carrinho/i
    })
    fireEvent.click(carrinho)
    screen.debug()
    expect(
      screen.getByRole('button', {
        name: /Continuar com a entrega/i
      })
    ).toBeInTheDocument()
  })
  test('Volta pro Home apos o click', () => {
    const voltar = screen.getByRole('link', {
      name: /Restaurantes/i
    })
    expect(voltar).toHaveAttribute('href', '/')
  })

  test('Abre o modal de endereço', () => {
    const carrinho = screen.getByRole('button', {
      name: /0 produto\(s\) no carrinho/i
    })
    fireEvent.click(carrinho)
    const continuar = screen.getByRole('button', {
      name: /Continuar com a entrega/i
    })
    fireEvent.click(continuar)
    expect(
      screen.getByRole('heading', {
        name: /Entrega/i
      })
    ).toBeInTheDocument()
  })
  test('Abre o modal de pagamento', () => {
    const carrinho = screen.getByRole('button', {
      name: /0 produto\(s\) no carrinho/i
    })
    fireEvent.click(carrinho)
    const continuar = screen.getByRole('button', {
      name: /Continuar com a entrega/i
    })
    fireEvent.click(continuar)
    const continuarPagamento = screen.getByRole('button', {
      name: /Continuar com o pagamento/i
    })
    fireEvent.click(continuarPagamento)
    expect(
      screen.getByRole('heading', {
        name: /Pagamento/i
      })
    ).toBeInTheDocument()
  })
  test('finaliza pagamento', () => {
    const carrinho = screen.getByRole('button', {
      name: /0 produto\(s\) no carrinho/i
    })
    fireEvent.click(carrinho)
    const continuar = screen.getByRole('button', {
      name: /Continuar com a entrega/i
    })
    fireEvent.click(continuar)
    const continuarPagamento = screen.getByRole('button', {
      name: /Continuar com o pagamento/i
    })
    fireEvent.click(continuarPagamento)
    expect(screen.getByText(/Pagamento - Valor a pagar/i)).toBeInTheDocument()

    const finalizarPedido = screen.getByRole('button', {
      name: /Finalizar Pagamento/i
    })
    fireEvent.click(finalizarPedido)
    expect(
      screen.getByRole('heading', {
        name: /Pedido Realizado/i
      })
    ).toBeInTheDocument()
  })
})
