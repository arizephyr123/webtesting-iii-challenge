// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';


describe('tests for Dashboard Component', () => {
    test('matches snapshot', ()=>{
        const tree = render(<Dashboard/>)
        expect((<Dashboard/>).baseElement).toMatchSnapshot()
    })
})