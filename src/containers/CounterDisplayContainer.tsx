import { CounterKey } from '../constants/StateKeysConstants';
import { CounterDisplay } from '../components/CounterDisplay';
import {fromState} from "@state-management/state-machine-react";

export const CounterDisplayContainer: React.FC = () => {
    const counter = fromState(CounterKey);

    return <CounterDisplay counter={counter} />;
};
