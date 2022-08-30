import './App.css';

import Dashboard from './components/Dashboard';
import TopBar from './components/TopBar';

const settings = {
  app: {
    name: 'Little Otter Health',
  },
  api: {
    url: 'https://lo-interview.s3.us-west-2.amazonaws.com/trips.json',
  }
};

function App() {
  return (
    <div className="App">
      <TopBar title={settings.app.name}>
        Project by: Wes Wilke
      </TopBar>
      <Dashboard settings={settings} />
    </div>
  );
}

export default App;
