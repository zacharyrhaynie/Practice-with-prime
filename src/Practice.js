import React, {Component} from 'react'
import isPrime from 'quick-is-prime'
import './index.css'

export default class extends Component {
    state = {
        number: null,
        odd: true,
        even: false
    };

    ifOdd = () => {
        return ((this.state.odd === true) ? 'odd, ' : 'not odd, ')
    };

    ifEven = () => {
        return ((this.state.even === true) ? 'even, ' : 'not even, ')
    };

    ifPrime = () => {
        return ((isPrime(this.state.number)) ? 'prime.' : 'not prime.')
    };

    submitHandler = (event) => {
        event.preventDefault();
        const num = this.state.number;
        if (num % 2 === 0) {
            this.setState({odd: false, even: true})
        }
        else {
            this.setState({odd: true, even: false})
        }
    };

    changeHandler = (event) => {
        this.setState({number: event.target.value});
    };

    render() {
        return (
            <div className="practiceDiv">
                <form onSubmit={this.submitHandler}>
                    Number: <input onChange={this.changeHandler} required type="number" className="numberInput"/>
                    <input type="submit"/>
                    <p>{this.state.number}: is {this.ifEven()} it is {this.ifOdd()} and is {this.ifPrime()}</p>
                </form>
            </div>
        )
    }
}
