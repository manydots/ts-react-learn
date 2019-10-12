import * as React from "react";
import * as ReactDOM from "react-dom";
import InitComponent from './components/index';
ReactDOM.render(<InitComponent onClick={()=>{console.log(789)}} />, document.getElementById('container'));