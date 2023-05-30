import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connect successfull')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Fail to connect database', error)
  }
}
bootstrap()
