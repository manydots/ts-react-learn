// import { PureComponent } from "react";

// interface WithLoadingProps {
//   loading: boolean;
// }

// <div className="spinner">
//         <div className="spinner-container container1">
//         <div className="circle1">&nbsp;</div>
//         <div className="circle2">&nbsp;</div>
//         <div className="circle3">&nbsp;</div>
//         <div className="circle4">&nbsp;</div>
//       </div>
//       <div className="spinner-container container2">
//         <div className="circle1">&nbsp;</div>
//         <div className="circle2">&nbsp;</div>
//         <div className="circle3">&nbsp;</div>
//         <div className="circle4">&nbsp;</div>
//       </div>
//       <div className="spinner-container container3">
//         <div className="circle1">&nbsp;</div>
//         <div className="circle2">&nbsp;</div>
//         <div className="circle3">&nbsp;</div>
//         <div className="circle4">&nbsp;</div>
//       </div>
//       </div>

// const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
//   class WithLoading extends React.Component<P & WithLoadingProps> {
//     render() {
//       const { loading, ...props } = this.props;
//       return loading ? <LoadingSpinner /> : <Component {...props as P} />;
//     }
//   };
// export default function AsyncComponent(importComponent){
//   class AsyncComponent extends PureComponent{
//     constructor(props) {
//       super(props);
//       this.state = {
//         component:null
//       };
//     }
//     async componentDidMount(){
//       const { default:component } = await importComponent();
//       this.setState({
//         component:component
//       });
//     }
//     render(){
//       const C = this.state.component;
//       return C ? <C {...this.props}/> : null
//     }
//   }
//   return AsyncComponent;
// }