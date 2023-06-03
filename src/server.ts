import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import logger from './shared/logger'

async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connect successfull')
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    logger.error('Fail to connect database', error)
  }
}
bootstrap()
