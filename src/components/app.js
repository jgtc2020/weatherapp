import React from 'react';
import Home from '../pages/home.js';
import Favorites from '../pages/favorites.js';
import About from '../pages/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = ()=>{

  return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/favorites' exact>
						<Favorites />
					</Route>
					<Route path='/about' exact>
						<About />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
