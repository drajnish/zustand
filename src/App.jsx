import './App.css';
import CounterValue from './counter/counter-value';
import ManageCounter from './counter/manage-counter';
import Recipes from './recipes';

function App() {
  return (
    <>
      <div>
        <h1>React With Zustand</h1>
        <ManageCounter />
        <CounterValue />
        <Recipes />
      </div>
    </>
  );
}

export default App;
