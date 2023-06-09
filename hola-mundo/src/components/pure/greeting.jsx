import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 35
        }
    }
    render() {
        return (
            <div>
                <h1> HOLA {this.props.name}</h1>
                <h2> tienes {this.state.age} años </h2>
                <div>
                    <button onClick={this.birthday}> CUMPLIR AÑOS </button>
                </div>

            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))

    }


}

Greeting.propTypes = {
    name: PropTypes.string,

};

export default Greeting;
