import { render, screen } from '@testing-library/react';
import Preview from './Preview';

test('renders the Preview panel', () => {
  const container = render(
    <Preview
      title="Blog Title"
      subtitle="Blog Subtitle"
      font="Roboto"
      align="center"
      text="Hello world!"
    />
  );
  expect(container).toMatchSnapshot();
});

test('empty title prop', () => {
  const container = render(
    <Preview subtitle="Blog Subtitle" font="Roboto" align="center" text="Hello world!" />
  );
  expect(container).toMatchSnapshot();
});
