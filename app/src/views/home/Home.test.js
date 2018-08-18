import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('can be mounted', () => {
    const container = mount(
      <StaticRouter context={{}}>
        <Home />
      </StaticRouter>
    );
    expect(container.find('Home').exists()).toBe(true);
  });
});
