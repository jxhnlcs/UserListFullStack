import express from 'express'

const app = express()

app.listen('3333', () => {
  console.log('API rodando com sucesso na porta 3333!')
})