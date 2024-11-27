import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CounterControlsContainer } from '../../containers/CounterControlsContainer';
import { StateMachine } from '@state-management/simple-state-machine';
import {setupMockStateMachine} from "@state-management/state-machine-react/dist/cjs/tests";

jest.mock('@state-management/simple-state-machine');

describe('CounterControlsContainer', () => {
    let mockStateMachine: any;

    beforeEach(() => {
        mockStateMachine = setupMockStateMachine({});

        (StateMachine.getInstance as jest.Mock).mockReturnValue(mockStateMachine);
    });

    it('increments the counter on button click', () => {
        const { getByText } = render(<CounterControlsContainer />);
        fireEvent.click(getByText(/Increment/i));
        expect(mockStateMachine.dispatch).toHaveBeenCalledWith(expect.any(Object));
    });

    it('decrements the counter on button click', () => {
        const { getByText } = render(<CounterControlsContainer />);
        fireEvent.click(getByText(/Decrement/i));
        expect(mockStateMachine.dispatch).toHaveBeenCalledWith(expect.any(Object));
    });
});
