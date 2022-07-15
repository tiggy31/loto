
import Lottery from './Lottery'
function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="mini" maxNum ={10} Balls = {4} />
    </div>
  );
}

export default App;
