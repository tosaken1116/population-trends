import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Tab } from '.';

describe('Tab ui Component', () => {
  it('要素が正しくレンダリングされる', () => {
    const { container, getByTestId } = render(
      <Tab onClick={(): void => {}} selected="tab1">
        <div title="tab1" data-testid="tab1">
          tab1
        </div>
        <div title="tab2" data-testid="tab2">
          tab1
        </div>
        <div title="tab3" data-testid="tab3">
          tab1
        </div>
      </Tab>
    );

    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(getByTestId('tab1')).toBeDefined();
    expect(getByTestId('tab2')).toBeDefined();
    expect(getByTestId('tab3')).toBeDefined();
  });

  it('選択されているタブが非活性である', () => {
    const { container } = render(
      <Tab onClick={(): void => {}} selected="tab1">
        <div title="tab1" data-testid="tab1">
          tab1
        </div>
        <div title="tab2" data-testid="tab2">
          tab1
        </div>
        <div title="tab3" data-testid="tab3">
          tab1
        </div>
      </Tab>
    );

    const tab1 = container.getElementsByTagName('button').item(0);
    expect(tab1).toBeDisabled();
  });

  it('選択されていないタブが活性である', () => {
    const { container } = render(
      <Tab onClick={(): void => {}} selected="tab1">
        <div title="tab1" data-testid="tab1">
          tab1
        </div>
        <div title="tab2" data-testid="tab2">
          tab1
        </div>
        <div title="tab3" data-testid="tab3">
          tab1
        </div>
      </Tab>
    );

    const tab2 = container.getElementsByTagName('button').item(1);
    expect(tab2).not.toBeDisabled();
    const tab3 = container.getElementsByTagName('button').item(2);
    expect(tab3).not.toBeDisabled();
  });
});
