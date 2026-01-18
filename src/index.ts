import HealthController from './api/health/health.controller';
import App from './app';

const app = new App([new HealthController()]);

app.listen();
