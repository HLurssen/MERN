// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthor';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';



function App() {

  const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Author Shelter</h1>
        <Link to={"/new"} className='btn btn-warning'>Add New Author</Link>
        <Link to={"/"} className='btn btn-info'> HomePage</Link>
        <Switch>
          <Route exact path="/">
            
            <hr />
            <AllAuthors newAuthorToggle = {newAuthorToggle} ></AllAuthors>
          </Route>
          <Route exact path="/authors/:_id">
            <OneAuthor></OneAuthor>
          </Route>
          <Route exact path={"/new"}>
          <NewAuthorForm newAuthorToggle = {newAuthorToggle} setNewAuthorToggle = {setNewAuthorToggle}></NewAuthorForm>
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthor></EditAuthor>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
