import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Application routes */
app.use('/api/v1', routes);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  next(Promise.reject('uncompleted promise'));
});

/* Global error handler */
app.use(globalErrorHandler);

/* Route not found */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api route not found',
      },
    ],
  });
  next();
});
export default app;
