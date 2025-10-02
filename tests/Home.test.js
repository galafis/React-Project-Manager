import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';

describe('Home Component', () => {
  test('renders Project Management Interface heading', () => {
    render(<Home />);
    expect(screen.getByText(/Project Management Interface/i)).toBeInTheDocument();
  });

  test('renders Created by Gabriel Demetrios Lafis paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Created by Gabriel Demetrios Lafis/i)).toBeInTheDocument();
  });

  test('renders Click me! button', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /Click me!/i })).toBeInTheDocument();
  });
});
