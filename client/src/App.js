import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Register from './pages/register'
// import Login from './pages/login'
import Pagerender from './Pagerender'
function App() {
  return (
    <Router>
      
      <input type="checkbox" id="theme"/>
      <div className="App">
        <div className="main">
          <Route exact path="/:page" component={Pagerender}/>
          <Route exact path="/:page/:id" component={Pagerender}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
