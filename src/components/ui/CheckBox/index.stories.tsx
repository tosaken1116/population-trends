import { useState } from 'react';

import { faHeart as unchecked } from '@fortawesome/free-regular-svg-icons';
import { faHeart as checked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckBox } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { redColor } from '@/mock/testStyle/color.css';

const meta: Meta<typeof CheckBox> = {
  title: 'CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    labelText: 'checkbox',
    size: 'm',
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const WithIcon: Story = {
  args: {
    labelText: 'checkbox',
    size: 'm',
    icon: {
      checkedIcon: <FontAwesomeIcon icon={checked} />,
      unCheckedIcon: <FontAwesomeIcon icon={unchecked} />,
    },
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const WithClassName: Story = {
  args: {
    labelText: 'checkbox',
    size: 'm',
    className: redColor,
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const WithChecked: Story = {
  args: {
    labelText: 'checkbox',
    size: 'm',
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(true);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const SSize: Story = {
  args: {
    labelText: 'checkbox',
    size: 's',
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const MSize: Story = {
  args: {
    labelText: 'checkbox',
    size: 'm',
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};

export const LSize: Story = {
  args: {
    labelText: 'checkbox',
    size: 'l',
  },
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(): void => setChecked((prevChecked) => !prevChecked)}
      />
    );
  },
};
