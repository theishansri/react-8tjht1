import { render, screen } from '@testing-library/react';
import Products from '../Products';

test('render Product screen', () => {
  render(<Products />);
  const getElementByClassName = await screen.findAllByLabelText('container');
  console.log(getElementByClassNames);
});
