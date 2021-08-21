import { CounterMessage } from './styles';

interface ICakeCounter {
  cakeCounter: number;
}

export const CakeCounter = ({ cakeCounter }: ICakeCounter) => {
  return <CounterMessage>{`Cake counter: ${cakeCounter}`}</CounterMessage>;
};
