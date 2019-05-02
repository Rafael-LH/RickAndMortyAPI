import React,{Component} from 'react'

 const CharacterCard = props => (

                <div className="container-card mb-3">
                    <img src={props.character.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.character.name}</h5>
                    </div>
                </div>
        )

        export default CharacterCard
    