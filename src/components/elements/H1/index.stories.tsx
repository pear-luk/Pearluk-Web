import { ComponentMeta, ComponentStory } from '@storybook/react';
import { H1 } from '.';

export default {
  title: 'elements/H1',
  component: H1,
  argTypes: {},
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

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
