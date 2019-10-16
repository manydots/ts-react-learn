# ts-react-learn
react基础回顾

# set node server
[page-preview](http://node.jeeas.cn/)

```javascript
	
	//TypeScript
	runArrowFunction = (name?:any) =>(event?:any)=>{
	      //箭头函数定义方式
	      //(JSX arribute) React.Attributes<HTMLDivElement>.onClick?
	      // TS2322: Type 'void' is not assignable to type '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined'.
	      console.log(this);
	      console.log(name,event);
  	}

  	render(){
  		return(
			<div onClick={this.runArrowFunction('name')}>runArrowFunction</div>	
  		)
  	}

```

```
	
	react-router-dom
	react-loadable demo使用按需加載
	react-loadable //使用React.Suspense代替
	react v15与v16.4生命周期对比
	react-lazyload 使用懒加载

```
