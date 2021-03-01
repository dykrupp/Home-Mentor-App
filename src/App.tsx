import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div style={{ display: 'flex', flex: .65 }}>
          <div style={{ backgroundColor: 'red', flex: 1.5}}></div>
          <div style={{ backgroundColor: 'green', flex: 1}}></div>
      </div>
      <div style={{ display: 'flex', flex: .35 }}>
          <div style={{ backgroundColor: 'purple', flex: 1.5}}></div>
          <div style={{ backgroundColor: 'pink', flex: 1}}></div>
          <div style={{ backgroundColor: 'yellow', flex: 1}}></div>
      </div>
    </div>
    </div>
  );
}

export default App;
