import React from 'react';
import { mount } from 'enzyme';
import { ServerError, NotFound } from './Error';

describe('ServerError', () => {
  it('can be mounted', () => {
    const error = new Error('Something has gone wrong.');
    const container = mount(<ServerError error={error} />);
    expect(container.find('ServerError').exists()).toBe(true);
    expect(container.find('h1').text()).toContain(error.message);
  });
});

describe('NotFound', () => {
  it('can be mounted', () => {
    const container = mount(<NotFound />);
    expect(container.find('NotFound').exists()).toBe(true);
  });
});
