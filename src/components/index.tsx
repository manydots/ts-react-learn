import * as React from "react";
//import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface initProps {
    children?: React.ReactNode;
    className?:string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    message?:string
}
/*
  只执行一次： constructor、componentWillMount、componentDidMount
  执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate
  有条件的执行：componentWillUnmount（页面离开，组件销毁时）
  不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）
*/
export default class InitComponent extends React.Component<initProps,any> {
  static defaultProps = {
    message:'test in InitComponent'
  };

  constructor(props: initProps) {
    super(props);
  }

  componentDidMount() {
    console.log('this is componentDidMount---console')
  }

  shouldComponentUpdate(){
      return true;
  }

  render() {
    console.log('this is render---console');
    const { message, children, onClick } = this.props;
    const className = classNames('ts-react-learn', message);
    return <div className={className} onClick={onClick}>this fromg {children} {message} <Link to="/test">显示1</Link></div>
  }
}
