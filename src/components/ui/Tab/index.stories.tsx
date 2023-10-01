import { useState } from 'react';

import { Tab } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: function Comp() {
    const [tab, setTab] = useState<string>('tab1');
    return (
      <Tab selected={tab} onClick={(title: string): void => setTab(title)}>
        <div title="tab1">タブ1</div>
        <div title="tab2">タブ2</div>
        <div title="tab3">タブ3</div>
      </Tab>
    );
  },
};
