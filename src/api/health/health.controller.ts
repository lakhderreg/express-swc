import { Request, Response, Router } from 'express';

import Controller from '../../interface/controller.interface';

class HealthController implements Controller {
  public path = '/health';
  public router = Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.path, this.getHealth);
  }

  private getHealth = (_request: Request, response: Response) => {
    response.status(200).send({ status: 'healthy' });
  };
}

export default HealthController;
