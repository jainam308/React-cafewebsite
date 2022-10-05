import React from 'react'

export default function Gallery(props) {
  return (
    <>
                <li>       
                <div className="w3_agile_portfolio_grid">
                        <a href={props.imgname}>
                            <img src={props.imgname} alt=" " className="img-fluid radius-image" />
                            <div className="w3layouts_news_grid_pos">
                                <div className="wthree_text">
                                    <h3>{props.title}</h3>
                                    <p>{props.name}</p>
                                </div>
                            </div>
                            </a>
                            </div>
                            </li>
                           
                         
    </>

  )
}
