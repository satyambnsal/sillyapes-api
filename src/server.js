const express = require('express'
)

const app = express();

app.use(express.json())

const PORT = 80;


const data = {
  "title": "Silly Ape",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Silly Ape # 1"
    },
    "description": {
      "type": "string",
      "description": "I am a very very silly ape"
    },
    "image": {
      "type": "string",
      "description": "https://picsum.photos/200/300"
    }
  }
}

app.get('/health', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` })
})

app.get('/:tokenId', (req, res) => {
  const { tokenId } = req.params;
  console.log(tokenId)
  const payload = data
  payload.title += ` #${tokenId}`
  res.json(payload)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))