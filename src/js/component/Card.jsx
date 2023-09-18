import React from "react";

const Card = () => {

    return (
        <>
            <div className="col-12 col-md-3 border border-secondary">
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Hola</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card