import React from "react"


export default class Timer extends React.Component {
    state = {
        weekday:null,
        year: null,
        minHour:null
    }
    componentDidMount() {
        this.setState({
            weekday: new Date().toLocaleString('ru', {
                weekday: 'long',
            }),
            year: new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            minHour: new Date().toLocaleString('ru', {
                hour: 'numeric',
                minute: "numeric"
            }),
        })
    }

    render() {
        return (
            <div className="topMenu-block_time__dayWeek">
              <p>{this.state.weekday}</p>
                {this.state.year}
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {this.state.minHour}
            </div>
        )
    }
}

