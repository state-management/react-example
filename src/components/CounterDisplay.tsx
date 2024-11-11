import React from 'react';

interface CounterDisplayProps {
    counter: number | undefined;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ counter }) => {
    return <h1>Counter: {counter}</h1>;
};
