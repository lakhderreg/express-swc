import { createRequest, createResponse } from 'node-mocks-http';

import HealthController from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(() => {
    controller = new HealthController();
  });

  it('should initialize with correct path', () => {
    expect(controller.path).toBe('/health');
  });

  it('should have a router instance', () => {
    expect(controller.router).toBeDefined();
  });

  it('should have GET /health route', () => {
    const routes = controller.router.stack.filter((layer: { route?: object }) => layer.route);
    expect(routes.length).toBeGreaterThan(0);
    expect(routes[0]?.route?.path).toBe('/health');
  });

  it('should return 200 status with healthy message', () => {
    const req = createRequest({ method: 'GET', url: '/health' });
    const res = createResponse();

    const handler = controller.router.stack[0]!.route!.stack[0]!.handle;
    handler(req, res, jest.fn());

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData().status).toBe('healthy');
  });
});
