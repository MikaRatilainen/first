import React from 'react';

class SupermarketQueue extends React.Component {
	constructor(props) {
    	super(props);

    	this.state = { userInput: '', till: '1', output: '' };

    	this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.Logic = this.Logic.bind(this);
  	}

  	handleChange(e) {
    	this.setState({
              userInput: e.target.value,
        }, this.Logic);
    }

    handleSelect(e) {
        this.setState({
            till: e.target.value,
        }, this.Logic);
    }

    Logic() {
        let customers = this.state.userInput.trim().split(' ').map(a => parseInt(a, 10));
        let till = new Array(parseInt(this.state.till, 10)).fill(0);
        for (let person of customers) {
            let idx = till.indexOf(Math.min(...till));
            till[idx] += person;
        };
        this.setState({

            output: Math.max(...till)
        });
    }

	render() {
		return (
			<div className="lesson">
			  <h3>Очередь в магазине</h3>
              <form>
			    <input type="text" onChange={this.handleChange} />
                <select onChange={this.handleSelect}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                
              </form>
			  <p>{this.state.output}</p>
			</div>
			);
	}
}

export default SupermarketQueue;