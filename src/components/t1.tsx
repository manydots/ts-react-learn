import * as React from "react";
import classNames from 'classnames';
import PropTypes  from 'prop-types';
import v15 from 'images/v15.jpg';
import v16 from 'images/v16.4.jpg';
import LazyLoad from 'react-lazyload';
export interface initProps {
    msg?:string;
}

export default class Test extends React.Component<initProps,any> {
  static defaultProps = {
   
  };
  static propTypes = {
    value: PropTypes.number,
    msg:PropTypes.string
  };

  static getDerivedStateFromProps(props:any, state:any){
    console.log('getDerivedStateFromProps替代componentWillReceiveProps');
    console.log(props, state);
    //生命周期函数是为了替代componentWillReceiveProps;在该函数(componentWillReceiveProps)中调用 this.setState() 将不会引起第二次渲染。

    /*
    本来（React v16.3中）是只在创建和更新（由父组件引发部分），
    也就是不是不由父组件引发，那么getDerivedStateFromProps也不会被调用，
    如自身setState引发或者forceUpdate引发。
    */


    /*
      这样的话理解起来有点乱，在React v16.4中改正了这一点，
      让getDerivedStateFromProps无论是Mounting还是Updating，
      也无论是因为什么引起的Updating，全部都会被调用，
      具体可看React v16.4 的生命周期图。
    */

    /*
      在组件创建时和更新时的render方法之前调用，它应该返回一个对象来更新状态，或者返回null来不更新任何内容。
    */


    //1：当state需要从props初始化时，使用2：尽量不使用，维护俩者状态需要消耗额外资源，增加复杂度3：每次render都会调用4：典型场景表单获取默认值
  }
  
  constructor(props: initProps) {
    super(props);
    this.state = {
      value:1,
      ls:[{
        version:'v15',
        versions:'15',
        command:[{
          type:'initialization',
          cmd:'setup props and state'
        },{
          type:'mounting',
          cmd:'componentWillMount,render,componentDidMount'
        },{
          type:'updation',
          cmd:'componentWillReceiveProps,shouldComponentUpdate,render,componentWillUpdate,componentDidUpdate'
        },{
          type:'unmounting',
          cmd:'componentWillUnmount'
        }]
      },{
        version:'v16.4',
        versions:'16',
        command:[{
          type:'initialization',
          cmd:'constructor'
        },{
          type:'Updating & Mounting',
          cmd:'static getDerivedStateFromProps,shouldComponentUpdate,render,getSnapshotBeforeUpdate,componentDidUpdate(componentDidMount)'
        },{
          type:'unmounting',
          cmd:'componentWillUnmount'
        }]
      }]
    };

    //1: 用于初始化操作，一般很少使用2：唯一一个直接修改state的地方，其他地方通过调用this.setState()方法。


  }

  

  getSnapshotBeforeUpdate(prevProps:any, prevState:any){
    //prevProps, prevState
    /*
      被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息
      （例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）
    */

    //1：在render之前调用，state已更新2：典型场景：获取render之前的dom状态
    console.log(prevProps,prevState)
  }
  
  componentDidMount() {
    //details==>https://www.jianshu.com/p/514fe21b9914
    //1：UI渲染完成后调用2：只执行一次3：典型场景：获取外部资源
  }

  shouldComponentUpdate(){
    //1：觉得Vistual Dom是否重绘2：一般可以由PuerComponent自动实现3：典型场景：性能优化
    return true;
  }

  componentDidUpdate(){
    //prevProps, prevState, snapshot
    //1：每次UI更新被调用2：典型场景：页面通过props重新获取数据
  }
  componentWillUnmount(){
    //1：组件被移除时调用2：典型场景：资源释放
  }
  onChange(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      value:e.target.value
    })
    e.persist();
    //console.log(e);
  }
  onButtonClick(e: React.MouseEventHandler<HTMLElement>){
    //console.log(e);
    let values = this.state.value+1;
    //console.log(values,e)
    this.setState({
      value:values,
      e:e
    })
  }

  runArrowFunction = (name?:any)=>(event?:any)=>{
      //箭头函数定义方式
      //(JSX arribute) React.Attributes<HTMLDivElement>.onClick?
      // TS2322: Type 'void' is not assignable to type '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined'.
      console.log(name,event);
  }
  
  render() {
    const { msg } = this.props;
    const className = classNames('ts-react-learn', 'value');
    //console.log(this.state)
    return (<div className={className} >
              <div>
                  <div onClick={this.runArrowFunction(msg)}>{msg}</div>
                  <input style={{width:'30px'}} ref="input" onChange={this.onChange.bind(this)} value={this.state.value ? this.state.value:''} />
                  <button type="button" onClick={this.onButtonClick.bind(this)}>click</button>
              </div>
              <div className="ts-react-learn-ul">
                  {
                    this.state.ls.map((item:any,index:number) => {
                        //console.log(item)
                        return(
                            <div key={index} className="ts-react-learn-li">
                                <div className="versions">
                                    <div className="label" style={{color:'red'}}>{item.version}</div>
                                    {
                                      item.command.map((v:any,k:any)=>{
                                        return(
                                          <div key={k}>
                                              <span style={{color:'#000'}}>{v.type}</span>:<span style={{color:'#000'}}>{v.cmd}</span>
                                          </div>
                                        )
                                      })
                                    }
                                    <div>
                                      {
                                        item.version == 'v15' ? (<LazyLoad height={200}><img src={v15} /></LazyLoad>) :null
                                      }
                                      {
                                        item.version == 'v16.4' ? (<LazyLoad height={200}><img src={v16} /></LazyLoad>) :null
                                      }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                  }

              </div>
           </div>)
  }
}

