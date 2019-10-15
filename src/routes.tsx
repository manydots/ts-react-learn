import * as React from "react";
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import './components/_style/index.less';

// import Loadable from 'react-loadable';
//import path from 'path';
// export interface loading {
// 	isLoading?:boolean;
// 	error?:any
// }
// const LoadingComponent=(props:loading) => {
//     if (props.isLoading) {
//         return (<div className="spinner">
//       	<div className="spinner-container container1">
//       	<div className="circle1">&nbsp;</div>
//       	<div className="circle2">&nbsp;</div>
//       	<div className="circle3">&nbsp;</div>
//       	<div className="circle4">&nbsp;</div>
//       </div>
//       <div className="spinner-container container2">
//       	<div className="circle1">&nbsp;</div>
//       	<div className="circle2">&nbsp;</div>
//       	<div className="circle3">&nbsp;</div>
//       	<div className="circle4">&nbsp;</div>
//       </div>
//       <div className="spinner-container container3">
//       	<div className="circle1">&nbsp;</div>
//       	<div className="circle2">&nbsp;</div>
//       	<div className="circle3">&nbsp;</div>
//       	<div className="circle4">&nbsp;</div>
//       </div>
//       </div>);
//     }else if (props.error) {
//         return <div>Sorry, there was a problem loading the page.</div>
//     }else {
//         return null;
//     }
// };

//serverSideRequirePath: path.join(__dirname, './build/test')
// const AsyncHome = Loadable({
//     loader: () => import('./components/index'),
//     loading: LoadingComponent
// });
// const AsyncTest = Loadable({
//     loader: () => import('./components/test'),
//     loading: LoadingComponent
// });

function rtHtml(){
  return (<div className="spinner">
        <div className="spinner-container container1">
        <div className="circle1">&nbsp;</div>
        <div className="circle2">&nbsp;</div>
        <div className="circle3">&nbsp;</div>
        <div className="circle4">&nbsp;</div>
      </div>
      <div className="spinner-container container2">
        <div className="circle1">&nbsp;</div>
        <div className="circle2">&nbsp;</div>
        <div className="circle3">&nbsp;</div>
        <div className="circle4">&nbsp;</div>
      </div>
      <div className="spinner-container container3">
        <div className="circle1">&nbsp;</div>
        <div className="circle2">&nbsp;</div>
        <div className="circle3">&nbsp;</div>
        <div className="circle4">&nbsp;</div>
      </div>
      </div>)
}

const AsyncHome = React.lazy(() => import('./components/index'));
const AsyncTest = React.lazy(() => import('./components/test'));
const routes = [{ 
	path: '/',
	component: AsyncHome,
	exact: true
}, {
	path: '/test',
	component: AsyncTest,
	exact: true
}];



export default class BasicRoute extends React.Component{
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
          <React.Suspense fallback={rtHtml()}>
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
