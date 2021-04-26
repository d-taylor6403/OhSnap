import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


//caling the cleanup function
afterEach(cleanup);

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />)
    })

    //Second Test- returns a snapshot of the About component
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

    
})