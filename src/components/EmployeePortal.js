import React from 'react'

export default function EmployeePortal() {
    return (
        <div >
            <div className="container mt-5">
            <div className="row">
            <div className="col-md-4">
              <img className="pl-2" height="220px" width="350px" src="https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228__340.jpg"></img>
            </div>
            <div className="col-md-6">
                   <h1>Learning to Code</h1>
                   <p>A card is a flexible and extensible content container.
                    It includes options for headers and footers,
                    a wide variety of content, contextual background colors,
                    and powerful display options. If you’re familiar with 
                    Bootstrap 3, cards replace our old panels,</p>
            <button className="text-right">Read more</button>
            </div>
            </div>
            </div>

            <div className="container mt-5">
            <div className="row">
            <div className="col-md-4">
            <h1>Learning to Code</h1>
                   <p>A card is a flexible and extensible content container.
                    It includes options for headers and footers,
                    a wide variety of content, contextual background colors,
                    and powerful display options. If you’re familiar with 
                    Bootstrap 3, cards replace our old panels,</p>
            <button className="text-right">Read more</button>
            </div>
            <div className="col-md-6">
            <img className="pl-2" height="220px" width="400px" src="https://cdn.pixabay.com/photo/2021/05/26/22/33/daisies-6286585__340.jpg"></img>
            </div>
            </div>
            </div>
        </div>
    )
}
