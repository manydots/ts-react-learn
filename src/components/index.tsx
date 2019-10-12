import * as React from "react";
//import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './_style/index.less';

export interface initProps {
    children?: React.ReactNode;
    className?:string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    message?:string
}

export default class InitComponent extends React.Component<initProps,any> {
  static defaultProps = {
    message:'test in InitComponent'
  };
  constructor(props: initProps) {
    super(props);
  }
  render() {
    const { message, children, onClick } = this.props;
    const className = classNames('ts-react-learn', message);
    return <div className={className} onClick={onClick}>this fromg {children} {message}</div>
  }
}
