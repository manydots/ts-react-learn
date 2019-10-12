import * as React from "react";
import Loadable from 'react-loadable';

export interface loading {
	isLoading?:boolean;
	error?:any
}
const LoadingComponent=( props:loading) => {
    if (props.isLoading) {

        return <div className="spinner">
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
      			</div>;
    }else if (props.error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }else {
        return null;
    }
};
const Loadables = (Components:any) => {
	return Loadable({
	    loader: () => import(Components),
	    loading: LoadingComponent
	})
};
export default Loadables;