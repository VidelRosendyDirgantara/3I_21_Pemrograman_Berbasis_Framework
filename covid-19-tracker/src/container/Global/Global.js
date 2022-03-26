import React, {Component} from 'react';
import './Global.css';

class Global extends Component {
    render() {
        return(
            <div className= "Global">
                <h1 className = "heading">Covid-19 Tracker</h1>
                <p className = "description">Informasi Tentang Covid-19</p>

                <div className = "world-stats">

                    {/*Ini akan menampilkan Data*/}

                </div>
            </div>

        )
    }
}

export default Global;