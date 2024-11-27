import React from 'react';
import {render} from '@testing-library/react';
import {CounterDisplayContainer} from '../../containers/CounterDisplayContainer';
import {StateMachine} from '@state-management/simple-state-machine';
import {setupMockStateMachine} from "@state-management/state-machine-react/dist/cjs/tests";

jest.mock('@state-management/simple-state-machine');

describe('CounterDisplayContainer', () => {
    let mockStateMachine: any;

    beforeEach(() => {
        mockStateMachine = setupMockStateMachine({});

        // Ensure that `getInstance` returns the mockStateMachine object
        (StateMachine.getInstance as jest.Mock).mockReturnValue(mockStateMachine);

    });


    it('renders the counter with default value', () => {
        const { getByText } = render(<CounterDisplayContainer />);
        expect(getByText(/Counter: 0/i)).toBeInTheDocument();
        expect(mockStateMachine.onChange).toHaveBeenCalled();
    });

});
