import * as React from "react";
import classNames from 'classnames';
import PropTypes  from 'prop-types';

export interface initProps {
    message?:string;
}
export default class Test extends React.Component<initProps,any> {
  static defaultProps = {
    value:0
  };
  static propTypes = {
    value: PropTypes.number,
    message:PropTypes.string
  };
  
  constructor(props: initProps) {
    super(props);
    this.state = {
      value:34
    }
  }
  componentDidMount() {

  }

  shouldComponentUpdate(){
      return true;
  }
  onChange(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      value:e.target.value
    })
    e.persist();
    //console.log(e);
  }
  
  render() {
    const { message } = this.props;
    const className = classNames('ts-react-learn', 'value');
    return <div className={className} >{message}<input ref="input" onChange={this.onChange.bind(this)} value={this.state.value ? this.state.value:''} /></div>
  }
}

