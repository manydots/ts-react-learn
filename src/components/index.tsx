import * as React from "react";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export interface initProps {
    children?: React.ReactNode;
    className?:string
}

export default class InitComponent extends React.Component<initProps,{}> {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
  };
  constructor(props: initProps) {
    super(props);
  }
  render() {
    const className = classNames('ts-react-learn');
    return <div className={className}>{this.props.children} this from</div>
  }
}
