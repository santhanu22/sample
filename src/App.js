// import './App.css';
import Home from './components/React';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Page1 from './components/Page1';
import Register from './CRUD Operation/Register';

  
     

function App() {
  
  
  
  return (
    <div>
      {/* <img src='nature-digital-art-88s3vri049fgl94v.jpg' alt=''></img> */}
    {/* <div className="App"> */}
      <header className="App-header">
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div className='aa'>
<li><button className='btn sideb'><i class="fa-solid fa-pencil"></i> &nbsp;compose</button></li><br/>
<li><a href='/b'><button className='btn sidea'><i class="fa-solid fa-inbox"></i> &nbsp; Inbox</button></a></li>
<li><a href='/a'><button className='btn sidea'><i class="fa-regular fa-star"></i> &nbsp;starred</button></a></li>
<li><a href='/c'><button className='btn sidea'><i class="fa-regular fa-clock"></i> &nbsp;snoozed</button></a></li>
<li><a href='/d'><button className='btn sidea'><i class="fa-regular fa-paper-plane"></i> &nbsp;sent</button></a></li>
<li><a href='/e'><button className='btn sidea'><i class="fa-regular fa-file"></i> &nbsp;draft</button></a></li>
</div> */}
      </header>
      <div className='center'>
        <BrowserRouter>
        {/* <Link to={'/a'}>Home</Link> */}
        {/* <Link to={'/b'}>Page1</Link> */}
          <Routes>
            <Route path='/a' element={<Register/>} />
            <Route path='/b' element={<Page1/>} />
            <Route path='/c' element={<App/>} />
          </Routes>
        </BrowserRouter>
        </div>
      <a href='/a'><button className='btn'>Register</button></a>
      <a href='/d'><button className='btn'>table</button></a>
      
    {/* </div> */}
    </div>
  );
}

export default App;

