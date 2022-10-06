import React from 'react';
import {BrowserRouter as Router,Routes,Route,Outlet,useParams,useOutletContext,useLocation,useNavigate,Link,NavLink} from 'react-router-dom';

export default function CustomApp() {
  return (
    <>
    <Router>
        <header>
            <h1>React Router v6</h1>
        </header>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/ > 
            <Route path="/users" element={<Users />}>
                <Route path=":id" element={<User/>}/>
                <Route path="me" element={<UserMe />} />
            </Route>
            <Route path="/loc" element={<Loc />} />
            <Route path="*" element={<Dunno />} />
        </Routes>
    </Router>
    </>
  )
}

function Nav() {
  return (
    <nav>
      <Link to="/" state={{ val: 123 }}>
        {' '}
        [ Home ]{' '}
      </Link>
      <Link to="/users"> [ All Users ] </Link>
      <Link to="/users/123"> [ User 123 ] </Link>
      <Link to="/users/me"> [ User Me ] </Link>
      <NavLink state={{ val: 456 }}
        to="/loc?id=234&name=bob#someHashValue"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'gold' })}
        className={({ isActive }) => {}}>
        useLocation
      </NavLink>
    </nav>
  );
}


function Loc() {
  const { pathname, search, hash, state } = useLocation();

  return (
    <main>
      <h2>{pathname}</h2>
      <h2>{search}</h2>
      <h3>{hash}</h3>
      <h3>{JSON.stringify(state)}</h3>
    </main>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <h2>This is Home</h2>
      <p>
        <a 
          onClick={() => {
            navigate('/users');
          }}
        >
          Go to Users
        </a>
      </p>
    </main>
  );
}

function UserMe() {
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';
  return (
    <main>
      <h2>This is all about me</h2>
      <p>The timmy data is {timmy}.</p>
    </main>
  );
}

function Users() {
  return (
    <main>
      <h2>This is Users</h2>

      <Outlet context={{ timmy: Date.now() }} />

      <Routes>
        <Route path=":id" element={<User />} />
        <Route path="me" element={<UserMe />} />
      </Routes>
    </main>
  );
}


function User() {
  const { id } = useParams();
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';

  return (
    <main>
      <h2>This is For User {id}</h2>
      <p>The timmy data is {timmy}.</p>
    </main>
  );
}

function Dunno() {
  return (
    <main>
      <h2>No idea what page I should show.</h2>
    </main>
  );
}