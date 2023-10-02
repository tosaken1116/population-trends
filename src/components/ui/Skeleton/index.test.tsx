import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Skeleton } from '.';

describe('Skeleton ui Component', () => {
  it('要素が正しくレンダリングされる', () => {
    const { container } = render(
      <Skeleton width={100} height={100} rounded="s" />
    );

    const element = container.firstChild;
    expect(element).toBeDefined();
  });

  it('要素のスタイルが正しく適用される', () => {
    const { container } = render(
      <Skeleton width={100} height={100} rounded="s" />
    );

    const element = container.firstChild;
    expect(element).toHaveStyle('width: 100px;');
    expect(element).toHaveStyle('height: 100px;');
    expect(element).toHaveStyle('border-radius: 4px;');
  });
});
