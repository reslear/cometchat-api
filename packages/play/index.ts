import express, { Request, Response } from 'express'
import { useCometchatApi, CometchatApiError } from 'cometchat-api'
import chalk from 'chalk'
import asyncHandler from 'express-async-handler'

const app = express()
const port = 3001

app.use(express.json({ limit: '10mb' }))
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(chalk.green(`http://localhost:${port}`))
})

app.use(function (err: any, req: any, res: any, next: any) {
  console.error(err.stack)
})

const cometChatApi = useCometchatApi({
  apiKey: process.env.COMETCHAT_API_KEY || '',
  appId: process.env.COMETCHAT_APP_ID || '',
  region: process.env.COMETCHAT_REGION || ''
})

app
  .get(
    '/user/get',
    asyncHandler(async (req: Request<{ uid: string }>, res) => {
      if (!req.query.uid) {
        res.status(400).send()
        return
      }

      const result = await cometChatApi.getUser(`${req.query.uid}`)

      res.send({ result })
    })
  )
  .post(
    '/user/add',
    asyncHandler(async (req, res) => {
      const json = req.body

      console.log(json)

      if (json?.withAuthToken) {
        json.withAuthToken = Boolean(json.withAuthToken)
      }

      if (!json?.name || !json?.uid || !json?.withAuthToken) {
        throw new Error('no name, uid or withAuthToken')
      }

      try {
        const result = await cometChatApi.createUser(json)
        res.send({ result })
      } catch (e) {
        res.status(400)

        if (e instanceof CometchatApiError) {
          console.error(e)
          res.send(e.message)
        }

        res.send()
      }
    })
  )
  .post(
    '/token/create',

    asyncHandler(async (req, res) => {
      const json = req.body

      console.log(json)

      if (json?.force) {
        json.force = Boolean(json.force)
      }

      if (!json?.uid) {
        throw new Error('no uid ')
      }

      const result = await cometChatApi.createToken(
        json.uid,
        json.force ? { force: true } : {}
      )

      res.send({ result })
    })
  )
