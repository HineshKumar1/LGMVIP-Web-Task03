import React from 'react'

export default function StudentCard(props) {
  return (
    <>
        <div className='my-3'> 
            <div className="card" style={{width: "18rem"}}>
                    <img src={props.ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5> 
                        <p className="card-text">Email :{props.email}</p>
                        <p className="card-text">Website :<a href='/'>{props.website}</a></p>
                        <p className="card-text">Gender :{props.gender}</p>
                        <p className="card-text">Skills :{props.skills}</p>
            </div>
                </div>
        </div>
        
    </>
  )
}
