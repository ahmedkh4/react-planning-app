import React from 'react';
import{ BrowserRouter, Switch , Route } from 'react-router-dom'
import Signin from './components/auth/Signin';
import Signup from './components/auth/SingUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbrar from "./components/layout/Navbar"
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Navbrar/>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/projects/:id" component={ProjectDetails}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/create" component={CreateProject}/>

    </Switch>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
