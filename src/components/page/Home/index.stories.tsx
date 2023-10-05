import { checkboxesContainer, chartContainer } from './index.css';

import { Screen as Home } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { CategoryTab } from '@/components/model/CategoryTab';
import { PopulationChartPresentation } from '@/components/model/PopulationChart/presentations';
import { PrefectureCheckBoxesPresentation } from '@/components/model/PrefectureCheckBoxes/presentations';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {},
  render: function Component() {
    return (
      <div>
        <div className={checkboxesContainer}>
          <PrefectureCheckBoxesPresentation
            onChange={(): void => console.log('selected')}
            selectedPrefectures={[]}
            prefectures={[
              { prefCode: 1, prefName: '北海道' },
              { prefCode: 2, prefName: '青森県' },
            ]}
          />
        </div>
        <CategoryTab />
        <div className={chartContainer}>
          <PopulationChartPresentation
            data={[
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
            ]}
            activePrefectures={[]}
            handleActivePrefectures={(): void => console.log('selected')}
          />
        </div>
      </div>
    );
  },
};
