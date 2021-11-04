import React from 'react';

export class VisuallyHiddenSvgIcons extends React.Component {    
  
    render() { 
        return  <div className={"visuallyhidden"} id={"svg-icons"}>
            <svg>
                <defs>
                    <symbol id={"ico-dotted-caret-right"} 
                        viewBox={"0 0 100 100"} 
                        width={"100%"} 
                        height={"100%"}>
                        <path d={"M30.1 0c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11S24 0 30.1 0zm9 31.1c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11zm19.7 19.7c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11zm-19.7 19c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11zM20.2 89c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11z"}></path>
                    </symbol>
                </defs>
            </svg>
        </div>   
    }
}