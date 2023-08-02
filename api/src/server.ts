import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  return response.json(['Usuário 1', 'Usuário 2'])
})

app.post('/users', (request, response) => {
  return response.json({ message: 'Criando usuário' })
})

app.put('/users', (request, response) => {
  return response.json({ message: 'Atualizando usuário' })
})

app.delete('/users', (request, response) => {
  return response.json({ message: 'Excluindo usuário' })
})

app.listen('3333', () => {
  console.log('API rodando com sucesso na porta 3333!')
})