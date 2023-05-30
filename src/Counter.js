import React,{ useState} from 'react'

function Counter() {
    const [num,setNum]=useState(0)

    function increment() {
        setNum(num+1)
    }
    function decrement() {
        setNum(num-1)
    }
    function reset() {
        setNum(0)
    }
  return (
    <div>
        <div style={{backgroundColor:'black',width:'350px',height:'150px',marginLeft:'600px',marginTop:'200px'}}>
            <h1 style={{color:'white',textAlign:'center'}}>Counter App <br /> {num}</h1>
            <button style={{marginLeft:'68px',backgroundColor:'red',color:'white'}} onClick={increment}>Increment</button>
            <button style={{marginLeft:'8px',backgroundColor:'red',color:'white'}} onClick={decrement}>Decrement</button>
            <button style={{marginLeft:'8px',backgroundColor:'green',color:'white'}} onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter