import { render } from '@testing-library/react';

test('should render RestaurantCrt component with props', () => {
  render(<RestaurantCard resData={mockdata}/>)                //component with props
  const heading = screen.getByText('heading');
  expect(heading).toBeInTheDocument();
})
