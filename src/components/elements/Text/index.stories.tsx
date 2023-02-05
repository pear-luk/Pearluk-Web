import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'elements/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  contents: `SEASON : 22FW 
준혁짱
ㄴㅇㅁ나ㅣ;ㅁ나ㅏㅣ;ㅁㅇ나ㅣ;asdfasdfasdfasdfadfadfsasdfadsfafdsfasdfㅁ나ㅣ;
ㅁㅇㄹ나ㅣ;ㅁㅇㄹ나ㅣ;ㅁㄴㅇ라ㅣ;ㅁdfsdfdsfdsfsdsdfsdfdsfdsfdsfsdfdsfsdfsdㅇㄹ나ㅣ;ㅁㅇㄹ나ㅣ;ㅁㅇㄹ나ㅣ;`,
};

EX.parameters = {
  layout: 'fullscreen',
};
