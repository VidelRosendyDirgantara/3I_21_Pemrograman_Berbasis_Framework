import React, { Component } from 'react';
import './Global.css';
import axios from 'axios';
import Numberformat from 'react-number-format';

//Import Component
import WorldStats from '../../component/WorldStats/WorldStats';

class Global extends Component {
    state = {
        result: {
            "TotalConfirmed": 0,
            "TotalDeaths": 0,
            "TotalRecovered": 0,
            "ActiveCase": 0
        }
    }

    async componentDidMount() {
        var globalData = await axios.get("https://api.covid19api.com/summary");

        let corona = globalData.data.Global;

        this.setState({
            result: {
                "TotalConfirmed": corona.TotalConfirmed,
                "TotalDeaths": corona.TotalDeaths,
                "TotalRecovered": corona.TotalConfirmed,
                "ActiveCase": corona.TotalConfirmed - (corona.TotalDeaths + corona.TotalRecovered)
            }
        })
    }

    render() {
        var Stats = Object.keys(this.state.result).map((key, index) => {
            return <WorldStats
                key={index}
                about={key}
                total={<Numberformat value={this.state.result[key]} thousandSeparator={true} displayType="text" />} />
        })

        return (
            <div className="Global">
                <h1 className="heading">Covid-19 Tracker</h1>
                <p className="description">Informasi Tentang Covid-19</p>

                <div className="world-stats">

                    {Stats}

                </div>
            </div>

        )
    }
}

export default Global;