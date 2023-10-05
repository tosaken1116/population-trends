import { CategoryTabPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CategoryTabPresentation> = {
  title: 'CategoryTab',
  component: CategoryTabPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CategoryTabPresentation>;

export const Default: Story = {
  args: {
    buttons: [
      <div title="総人口" key="総人口">
        総人口
      </div>,
      <div title="老年人口" key="老年人口">
        老年人口
      </div>,
      <div title="生産年齢人口" key="生産年齢人口">
        生産年齢人口
      </div>,
      <div title="年少人口" key="年少人口">
        年少人口
      </div>,
    ],
    selectedTab: '総人口',
    onTabChange: (): void => console.log('selected'),
  },
};
