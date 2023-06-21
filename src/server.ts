import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

/* Uncaught exception error handle here */
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;
async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connect successfull');
    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Fail to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
