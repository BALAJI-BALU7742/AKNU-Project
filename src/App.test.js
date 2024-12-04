import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // To wrap around the app for routing
import App from './App';

// A utility function to render the app with Router context
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

test('renders the Home component when navigating to the home page', () => {
  renderWithRouter(<App />);
  
  // Check for a specific element in the Home page (e.g., Welcome text)
  const homeHeading = screen.getByText(/Welcome to AKNU MSN campus/i);
  expect(homeHeading).toBeInTheDocument();
});

test('renders the User component when navigating to /user', () => {
  renderWithRouter(<App />);
  
  // Navigate to /user route by simulating a click on a link or directly
  fireEvent.click(screen.getByText(/User Registration/i));  // Make sure this link is in your Header component
  
  // Check for an element specific to the User component (e.g., Membership Registration)
  const userHeading = screen.getByText(/Membership Registration/i);
  expect(userHeading).toBeInTheDocument();
});

test('renders the Admin component when navigating to /admin', () => {
  renderWithRouter(<App />);
  
  // Navigate to /admin route by simulating a click on a link or directly
  fireEvent.click(screen.getByText(/Admin/i));  // Make sure this link is in your Header component
  
  // Check for an element specific to the Admin component (e.g., Admin Dashboard)
  const adminHeading = screen.getByText(/Admin Dashboard/i);
  expect(adminHeading).toBeInTheDocument();
});

test('renders NotFound for undefined routes', () => {
  renderWithRouter(<App />);
  
  // Directly visit an undefined route
  window.history.pushState({}, 'Test page', '/non-existent-route');
  
  // Check for NotFound page content
  const notFoundMessage = screen.getByText(/404 - Page Not Found/i);
  expect(notFoundMessage).toBeInTheDocument();
});
