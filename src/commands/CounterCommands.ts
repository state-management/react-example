import { Command } from '@state-management/simple-state-machine';
import { CounterKey } from '../constants/StateKeysConstants';

export class IncrementCounterCommand extends Command<number> {
    execute(incrementBy: number): void {
        const currentCounter = this.getLatest(CounterKey) ?? 0;
        this.putState(CounterKey, currentCounter + incrementBy);
    }
}

export class DecrementCounterCommand extends Command<void> {
    execute(): void {
        const currentCounter = this.getLatest(CounterKey) ?? 0;
        this.putState(CounterKey, currentCounter - 1);
    }
}
