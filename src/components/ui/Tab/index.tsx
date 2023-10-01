import type { ReactElement } from 'react';

import { cva } from 'class-variance-authority';

import { container, tabBase, tabNotSelected, tabSelected } from './index.css';

type Props = {
  onClick: (title: string) => void;
  children: ReactElement<{ title: string }>[];
  selected: string;
};

const tabStyle = cva(tabBase, {
  variants: {
    selected: {
      true: tabSelected,
      false: tabNotSelected,
    },
  },
});

export const Tab: React.FC<Props> = ({ children, onClick, selected }) => (
  <div className={container}>
    {children.map((child) => (
      <button
        key={child.props.title}
        className={tabStyle({ selected: child.props.title === selected })}
        onClick={(): void => onClick(child.props.title)}
      >
        {child}
      </button>
    ))}
  </div>
);
