import React, {Component} from 'react';
import './Global.css';

//Import Component
import WorldStats from '../../component/WorldStats/WorldStats';

class Global extends Component {
    render() {
        return(
            <div className= "Global">
                <h1 className = "heading">Covid-19 Tracker</h1>
                <p className = "description">Informasi Tentang Covid-19</p>

                <div className = "world-stats">

                    <WorldStats
                    key="1"
                    about="Total Case"
                    total="255.123"/>

                    <WorldStats
                    key="1"
                    about="Total Deaths"
                    total="155.123"/>

                    <WorldStats
                    key="1"
                    about="Total Recovered"
                    total="175.123"/>

                </div>
            </div>

        )
    }
}

export default Global;