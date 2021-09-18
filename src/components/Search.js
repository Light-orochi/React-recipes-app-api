import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        const {handleChange ,handleSubmit,search}=this.props;
        return (
            <div className="container">
                <div className="row">
                
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className=" text-capitalize text-center text-slanted"> Search recipe with {" "} <strong className="text-green">
                    Food2Fork</strong></h1>
                    <form  className="mt-4">
                    <label htmlFor="search" className="text-capitalize">
                        types recipes separed by comma

                    </label>
                    <div className="input-group">
                        <input type="text" name="search"  className="form-control" placeholder="chicken ,oigon,carrots" value={search}
                        onChange={handleChange} />

                        <div className="input-group-append">
                        <button type="submit" name="search" className="btn btn-info"   onClick={handleSubmit} > <i className="fas fa-search"></i></button>
                        
                        </div>
                    </div></form>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
