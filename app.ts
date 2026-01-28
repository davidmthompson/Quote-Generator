import express from 'express';
import cors from "cors"

interface Quote{
     message: String
     author: string
     title: string | undefined
}

let item: Quote[] =[
     {
          message: "Some Message goes her",
          author: "me",
          title: undefined
     },

          {
          message: "If A dog is a dog is a cat a cat ",
          author: "smart man",
          title: undefined
     }
]

const app = express()
app.use(cors())

app.get('/', (request, response) => {
     response.send("Welcome to the quote sever")
})

app.get('/getDailyJoke', (request, response) => {
     const randomQuote: Quote = item[Math.floor(Math.random() * item.length - 1)]
     response.send(randomQuote)
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
}) 