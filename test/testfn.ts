const Loadables = () => {
	console.log(111)
}

const runArrowFunction = (name?:any)=>(event?:any)=>{
      //箭头函数定义方式
      //(JSX arribute) React.Attributes<HTMLDivElement>.onClick?
      // TS2322: Type 'void' is not assignable to type '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined'.
      console.log(name,event);
}