import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CheckBox } from '.';

describe('Typography ui Component', () => {
  it('子要素が正しくレンダリングされる', () => {
    const { container } = render(
      <CheckBox
        checked={false}
        labelText="Test Label"
        onChange={(): void => console.log('state changed')}
        size="m"
      />
    );

    const element = container.firstChild;
    expect(element).toHaveTextContent('Test Label');
  });

  it('チェック状態の時にアイコンがチェック済みのアイコンである', () => {
    const { container } = render(
      <CheckBox
        checked
        onChange={(): void => console.log('state changed')}
        labelText="Test Label"
        size="m"
      />
    );

    expect(container.querySelector('svg')).toHaveClass(
      'svg-inline--fa fa-square-check fa-xl'
    );
  });

  it('チェックしていない時にアイコンがチェックしてない状態のアイコンである', () => {
    const { container } = render(
      <CheckBox
        checked={false}
        onChange={(): void => console.log('state changed')}
        labelText="Test Label"
        size="m"
      />
    );

    expect(container.querySelector('svg')).toHaveClass(
      'svg-inline--fa fa-square-check fa-xl'
    );
  });

  it('クラス名が正しくレンダリングされる', () => {
    const { container } = render(
      <CheckBox
        checked={false}
        onChange={(): void => console.log('state changed')}
        labelText="Test Label"
        size="m"
        className="test"
      />
    );

    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass('test');
  });

  it('handles onChange correctly', () => {
    const mockOnChange = jest.fn();

    const { getByRole } = render(
      <CheckBox
        checked={false}
        labelText="Test Label"
        size="m"
        onChange={mockOnChange}
      />
    );

    fireEvent.click(getByRole('checkbox'));
    expect(mockOnChange).toHaveBeenCalled();
  });
});
