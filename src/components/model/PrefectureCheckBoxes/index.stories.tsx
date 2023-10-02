import { useState } from 'react';

import { PrefectureCheckBoxesPresentation } from './presentations';
import { PrefectureCheckBoxesErrorPresentation } from './presentations/error';
import { PrefectureCheckBoxesLoadingPresentation } from './presentations/loading';

import type { Response } from '@/app/api/v1/prefectures/schema';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrefectureCheckBoxesPresentation> = {
  title: 'PrefectureCheckBoxes',
  component: PrefectureCheckBoxesPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrefectureCheckBoxesPresentation>;

export const Default: Story = {
  render: function Component() {
    const [selectedPrefectures, setSelectedPrefectures] = useState<
      Response['result']
    >([]);

    const onChange = (target: Response['result'][number]): void => {
      setSelectedPrefectures((prev) => {
        if (prev.includes(target)) {
          return prev.filter((prefecture) => prefecture !== target);
        } else {
          return [...prev, target];
        }
      });
    };

    return (
      <PrefectureCheckBoxesPresentation
        onChange={onChange}
        selectedPrefectures={selectedPrefectures}
        prefectures={[
          { prefCode: 1, prefName: '北海道' },
          { prefCode: 2, prefName: '青森県' },
        ]}
      />
    );
  },
};

export const Error: Story = {
  render: () => <PrefectureCheckBoxesErrorPresentation />,
};

export const Loading: Story = {
  render: () => <PrefectureCheckBoxesLoadingPresentation />,
};
