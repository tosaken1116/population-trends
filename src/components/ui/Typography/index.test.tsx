import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Typography } from '.';

describe('Typography ui Component', () => {
  it('子要素が正しくレンダリングされる', () => {
    const { container } = render(<Typography>Test</Typography>);
    const element = container.firstChild;
    expect(element).toHaveTextContent('Test');
  });

  it('タグが正しくレンダリングされる', () => {
    const { container } = render(
      <Typography variant="strong">Test</Typography>
    );

    const element = container.firstChild as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('STRONG');
  });

  it('クラス名が正しくレンダリングされる', () => {
    const { container } = render(
      <Typography className="test">Test</Typography>
    );

    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass('test');
  });
});
