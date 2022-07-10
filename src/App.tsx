import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ApplicationWithContext from './components/Application/Application';
import CounterApplication from './components/Counter/Application';
import HOC from './components/HOC/Application';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ApplicationWithContext />} />
          <Route path="context" element={<ApplicationWithContext />} />
          <Route path="hoc" element={<HOC />} />
          <Route path="redux-counter" element={<CounterApplication />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/context">useContext</Link>
          </li>
          <li>
            <Link to="/hoc">HOC</Link>
          </li>
          <li>
            <Link to="/redux-counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
