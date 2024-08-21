import { useActions } from '../store/use-counter';

function ManageCounter() {
  const { handleIncrementCount } = useActions();

  return (
    <button
      onClick={handleIncrementCount}
      className="mb-5 bg-black text-white text-lg font-bold"
    >
      Handle Counter
    </button>
  );
}

export default ManageCounter;
