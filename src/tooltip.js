import React from "react";

//  TWO FUNCTIONS FOR HANDLING THE POSITION FOR HOVERING
class Tooltip extends React.Component{
    classn = () =>{
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                 Hovering over "{this.props.position}" side.

            </div>
        )
    }
}

export default Tooltip;