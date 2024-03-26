import React from "react"


function Header(props){
    const{onClick}=props;

    return(
        <button onClick={onClick}>Click on child</button>
    );
    
}
function PapaComponent(){
    const handleClick=()=>{
        console.log('Button clicked by child');
    };
    return(
        <div>
            <Header onClick={handleClick}/>
        </div>
    );

}

export default PapaComponent;