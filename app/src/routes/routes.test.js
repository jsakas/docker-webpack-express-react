import routes from './routes';

describe('routes', () => {
  it('exports a route array with route and Component', () => {
    routes.forEach(route => {
      expect(route).toHaveProperty('route');
      expect(route).toHaveProperty('Component');
    });
  });
});
