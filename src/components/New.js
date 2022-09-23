import React from 'react'
import { useLocation } from 'react-router-dom'

const New = () => {
  const location = useLocation();

  return (
    <>

      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-horizontal">
                        <div class="img-square">
                            <img src={location.state.Image} />
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">{location.state.Title}</h2>
                            <h4 class="card-subtitle">{location.state.Subtitle}</h4>
                            <p class="card-text">{location.state.Article}</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default New