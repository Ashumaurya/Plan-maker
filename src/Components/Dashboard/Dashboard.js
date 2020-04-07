
import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import Notification from './Notification'

class Dashboard extends Component{
    render(){
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList/>

                    </div>
                    <div className="s12 m5 offset-m1">
                    <Notification/>

                    </div>
                </div>
            </div>

        )
    }
}
export default Dashboard;