'use client';

import type { ReactElement } from 'react';

import { useCategoryTab } from '../hooks';

import { Tab } from '@/components/ui/Tab';

type Props = {
  onTabChange: (title: string) => void;
  selectedTab: string;
  buttons: ReactElement<{ title: string }>[];
};

export const CategoryTabPresentation: React.FC<Props> = ({
  onTabChange,
  selectedTab,
  buttons,
}) => (
  <Tab onClick={onTabChange} selected={selectedTab}>
    {buttons}
  </Tab>
);

export const CategoryTabContainer: React.FC<{
  children: ReactElement<{ title: string }>[];
}> = ({ children }) => {
  const { selectedTab, onTabChange } = useCategoryTab();
  return (
    <CategoryTabPresentation
      buttons={children}
      selectedTab={selectedTab}
      onTabChange={onTabChange}
    />
  );
};
