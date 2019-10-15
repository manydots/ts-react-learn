import * as React from "react";
import classNames from 'classnames';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
import T from './t1';

export interface initProps {
    message?:string;
}
export default class Test extends React.Component<initProps,any> {
  static defaultProps = {
    message:'st'
  };
  static propTypes = {
    message: PropTypes.string
  };
  
  constructor(props: initProps) {
    super(props);
    this.state = {
      message:'sts',
      msg:'this is a message'
    }
  }
  componentDidMount() {
    //console.log('this is componentDidMount---console')
    const self = this;
    setTimeout(function(){
      self.setState({
        msg:'changing txt'
      })
    },5000)
  }

  shouldComponentUpdate(){
      return true;
  }

  render() {
    const { message } = this.props;
    const className = classNames('ts-react-learn', message);
    return <div className={className} >{message} <Link to="/">返回56</Link>
               <div><T msg={this.state.msg} /></div>
           </div>
  }
}

