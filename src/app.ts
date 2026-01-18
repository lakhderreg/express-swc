import bodyParser from 'body-parser';
import express from 'express';

import Controller from './interface/controller.interface';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initMiddlewares();
    this.initControllers(controllers);
  }

  private initMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/', controller.router);
    });
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
}

export default App;
