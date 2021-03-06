import React, { Component } from 'react'
import Notification from "./Notification"
import ProjectList from "../projects/ProjectLists"
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component {
    render() {
        
        const {projects} = this.props
        
        return (
            <div className="dashboard container"> 

                <div className="row">
                    <div className="col s12 m6 l6 ">
                        <ProjectList projects={projects}/>
                    </div>


                    <div className="col s12 m5 offset-m1">
                        <Notification/>
                        <Notification/>
                        <Notification/>
                        <Notification/>
                    </div>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        projects: state.project.projects
    }
}

export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps)
    )(Dashboard)

