import { Tabs as CustomTabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: CustomTabs,
  argTypes: {
    labels: { control: 'array' },
    children: { control: 'array' },
  },
};

const Template = args => <CustomTabs {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  labels: ['Tab One', 'Tab Two', 'Tab Three'],
  children: ['Tab one content', 'Tab two content', 'Tab three content'],
};
