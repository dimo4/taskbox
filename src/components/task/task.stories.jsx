import { Task } from './task';

export default {
  component: Task,
  title: 'Molecules/Task'
}

const Template = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2022, 0, 1, 9, 0)
  }
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

const lonTitleString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim mauris vel quam bibendum sagittis. Fusce arcu orci, dapibus sit amet purus in, posuere tempor lorem. Morbi condimentum justo eu pellentesque elementum. Duis eu mauris cursus, maximus mi eu, pulvinar turpis. In mattis ex ut elementum consequat. Etiam diam velit, scelerisque vel sem vitae, molestie semper tortor. Integer tincidunt mattis tellus quis dictum. Aliquam sollicitudin, leo vehicula tincidunt mattis, dolor mi mollis est, a lacinia justo lorem eu tortor. Etiam fermentum bibendum tincidunt. Etiam laoreet eros non urna pulvinar, et mollis ipsum vehicula. Integer sit amet turpis vestibulum, rhoncus ante luctus, aliquam lorem. Phasellus posuere ullamcorper sem sit amet elementum. Etiam vel interdum enim. Donec eu fringilla nisl, id porttitor dui. Phasellus consequat vitae nulla ut commodo. Donec at magna augue.'
export const LongTitle = Template.bind({})
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: lonTitleString
  }
}