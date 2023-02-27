import React from 'react'
import ReactDOM from "react-dom/client";

document.getElementById('root').innerHTML='hi'
const heading=React.createElement("h1",{},"Namaste Everyone hi");
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);

const Body=()=>{
    return(
        <React.Fragment>
            <React.Fragment>
                <div> React Fragment</div>
            <div>
                Body
            </div>
        </React.Fragment>
            </React.Fragment>
    )
}


const AppLayout=()=>{
return(
    <>
<HeaderComponent/>
<Body/>
    </>
)
}
const styleobj={
    border:'2px solid black',
    color:'white',
    backgroundColor:"green"
}


const Title= (
    <img className='logo' src='https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj' alt='logo'/>

    )
const HeaderComponent=()=>{
    return (<div className="header" style={{backgroundColor:'cyan'}}>
{Title} 
<div className='nav-items'>
<ul >
<li style={styleobj}> Home</li>
<li style={styleobj}>About</li>
<li style={styleobj } >Contact</li>
<li style={styleobj}>Cart</li>
</ul>
</div>


    </div>
    )
}

root.render(<AppLayout/>)