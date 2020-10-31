import React from 'react'

const ProjectDetails = (props) => {
    let id = props.match.params.id
    return (
        <div className=" container section project-details">
            <div className=" card z-depth-0">
                <div className=" card-content">
                    <span className="card-title">Project Tilte {id}</span>
                    <p>Nouvel arrivage voiture électrique pour enfants Mercedes-Benz AMG
                    Pour plus d'informations veuillez contacter le 98243577</p>
                    
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div> Posted by .....</div>
                    <div>2nd september 2 am</div>
                </div>

            </div>
            
        </div>
    )
}

export default ProjectDetails
