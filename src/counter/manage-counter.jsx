import useCounter from '../store/use-counter';

function ManageCounter() {
  const incrementCount = useCounter((state) => state.handleIncrementCount);

  return (
    <button
      onClick={incrementCount}
      className="mb-5 bg-black text-white text-lg font-bold"
    >
      Handle Counter
    </button>
  );
}

export default ManageCounter;
