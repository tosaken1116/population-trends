import { PopulationChartPresentation } from './presentations';
import { PopulationChartEmptyPresentation } from './presentations/empty';
import { PopulationChartErrorPresentation } from './presentations/error';
import { PopulationChartLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PopulationChartPresentation> = {
  title: 'PopulationChart',
  component: PopulationChartPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopulationChartPresentation>;

export const Default: Story = {
  args: {
    data: [
      {
        prefecture: '北海道',
        data: [
          { year: 1960, value: 50 },
          { year: 1965, value: 100 },
          { year: 1970, value: 200 },
        ],
      },
      {
        prefecture: '青森県',
        data: [
          { year: 1960, value: 200 },
          { year: 1965, value: 100 },
          { year: 1970, value: 300 },
        ],
      },
    ],
  },
};

export const Empty: Story = {
  render: () => <PopulationChartEmptyPresentation />,
};

export const Error: Story = {
  render: () => <PopulationChartErrorPresentation />,
};

export const Loading: Story = {
  render: () => <PopulationChartLoadingPresentation />,
};
