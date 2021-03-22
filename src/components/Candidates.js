import React, {Component} from 'react';

class Candidates extends Component {
    render() {

        let candidate = this.props;

        return (
            <div>
                <h3>{candidate.name}</h3>
                <p> {candidate.experience}</p>
            </div>
        );
    }
}

export default Candidates;