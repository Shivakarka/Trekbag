type CounterProps = {
  totalNumberOfItems: number;
  numberOfItemsPacked: number;
};

const Counter = ({ totalNumberOfItems, numberOfItemsPacked }: CounterProps) => {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
