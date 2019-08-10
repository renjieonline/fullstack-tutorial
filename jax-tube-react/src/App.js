import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, {lazy, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
const AddVideo = lazy(() => import('./components/AddVideo'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/videoPlayer" component={VideoPlayer}/>
          <Route exact path="/addVideo" component={AddVideo}/>
          <Route render={() => <Redirect to="/videoPlayer" />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
