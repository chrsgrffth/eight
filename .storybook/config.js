import {
  configure,
  addParameters
} from '@storybook/react';

const req = require.context('../stories', true, /\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    showPanel: false
  }
})

configure(loadStories, module);