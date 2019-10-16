import * as React from "react";
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import { renderHtml } from 'utils/tools';
import './components/_style/index.less';

const AsyncHome = React.lazy(() => import('./components/index'));
const AsyncTest = React.lazy(() => import('./components/test'));

const routes = [{ 
	path: '/',
	component: AsyncHome,
	exact: true
}, {
	path: '/testing',
	component: AsyncTest,
	exact: true
}];

export default class BasicRoute extends React.Component{
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
          		<React.Suspense fallback={renderHtml()}>
		    	    {
	                    routes.map((route) => {
	                      	return(
	                      		  <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
	                      	)
	                    })
                	}
           		</React.Suspense>
	    	</Switch>
    	</BrowserRouter>)
  }
}
