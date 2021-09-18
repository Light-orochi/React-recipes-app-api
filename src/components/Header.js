import React from 'react'

export default function Header({children,title,styleClass}) {
    return (
       <header>
           <div className="container-fluid">
            <div className="row">
                <div className={`row align-items-center ${styleClass}`}>

                 <div class="col text-center">
                
                
                   <h1 className="text-light text-uppercase letter-spacing  text-slanted">{title} </h1>  
                {children}
                 </div>
                  
              </div>  
                </div>   
           </div>
       </header>
    )
}


Header.defaultProps={
    title :"Default title",
    styleClass:"header-hero"
}