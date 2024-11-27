import React from 'react';
import { CounterControls } from '../components/CounterControls';
import {useDispatcher} from "@state-management/state-machine-react";
import {DecrementCounterCommand, IncrementCounterCommand} from "../commands/CounterCommands";


export const CounterControlsContainer: React.FC = () => {
    const dispatch = useDispatcher();

    const increment = () => dispatch(new IncrementCounterCommand(1));
    const decrement = () => dispatch(new DecrementCounterCommand());

    return <CounterControls onIncrement={increment}
                            onDecrement={decrement} />;
};
