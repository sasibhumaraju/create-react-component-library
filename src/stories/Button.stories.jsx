import { fn } from '@storybook/test';
import { Button } from '../components';

export default {
  title: 'React Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' }
  },
  args: { onClick: fn() },
};


export const Primary = {
  args: {
    primary: true,
    label: 'Visit Npm Page',
    size: 'medium'
  },
};

export const Secondary = {
  args: {
    label: 'Visit Npm Page',
    size: 'medium'
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Visit Npm Page',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Visit Npm Page',
  },
};
