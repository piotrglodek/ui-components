import { Button as CustomButton } from './Button';

export default {
  title: 'Components/Button',
  component: CustomButton,
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select' },
    variant: { control: 'select' },
    onClick: { action: 'event click' },
  },
};

const Template = args => <CustomButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
};
