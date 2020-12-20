import { Select as CustomSelect } from './Select';

export default {
  title: 'Components/Select',
  component: CustomSelect,
  argTypes: {
    id: { control: 'text' },
    selectValues: { control: 'array' },
    selectValue: { action: 'event click' },
    defaultValue: { control: 'text' },
  },
};

const Template = args => <CustomSelect {...args} />;

export const Select = Template.bind({});
Select.args = {
  id: 'selectfruits',
  selectValues: ['Apple', 'Grape', 'Banana', 'Strawberry'],
  defaultValue: 'Grape',
};
