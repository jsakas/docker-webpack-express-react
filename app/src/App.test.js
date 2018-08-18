import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('can be mounted', () => {
    const container = mount(
      <StaticRouter context={{}}>
        <App />
      </StaticRouter>
    );
    expect(container.find('App').exists()).toBe(true);
  });
});
