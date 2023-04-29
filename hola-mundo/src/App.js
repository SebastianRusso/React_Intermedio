import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import TaskListComponet from './container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name= "Seba"></Greeting>
        
        <TaskListComponet></TaskListComponet>
      </header>
    </div>
  );
}

export default App;
