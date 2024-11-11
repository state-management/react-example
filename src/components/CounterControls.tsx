import React from 'react';

interface CounterControlsProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export const CounterControls: React.FC<CounterControlsProps> = ({ onIncrement, onDecrement }) => {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
};
