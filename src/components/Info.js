import React, {Component} from 'react';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Olga",
            age: 23,
            status: "married",
            nationality: "Ukraine"
        };
    }

    changeNationality = () => {
        this.setState({nationality: "Italy"});
    }

    render() {
        return (
            <div>
                <p> Hi, my name is {this.state.name}.</p>
                <p> I am {this.state.age} years old.</p>
                <p> I'm {this.state.status}.</p>
                <p> I'm from {this.state.nationality}.</p>
                <button onClick={this.changeNationality}> change country </button>
            </div>
        );
    }
}

export default Info;