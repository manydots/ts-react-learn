import * as React from "react";
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface initProps {
    children?: React.ReactNode;
    message?:string
}
export default class Test extends React.Component<initProps,any> {
  static defaultProps = {
    message:'st'
  };

  constructor(props: initProps) {
    super(props);
  }
  
  render() {
    const { message } = this.props;
    const className = classNames('ts-react-learn', message);
    return <div className={className} >{message} <Link to="/">返回1</Link></div>
  }
}
