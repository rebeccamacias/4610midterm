import { Counter } from './counter.jsx';

export const Question1 = () => {
  return (
    <div>
      Render your counters here!
      <br />
      <Counter min={-5} max={5}></Counter>
      <br />
      <Counter min={-15} max={-5}></Counter>
      <br />
      <Counter min={5} max={15}></Counter>
      <br />
    </div>
  );
};