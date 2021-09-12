import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			string: 'Hi Mia',
			monsters: [],
			searchMonstersField: '',
		};
		// if you are not using arrow function for the handleSearchBoxChange function, you have to bind 'this' to the function
		//this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				console.log('monsters: ', users);
				this.setState({ monsters: users });
			});
	}
	handleSearchBoxChange = (e) => {
		this.setState({ searchMonstersField: e.target.value });
	};
	render() {
		const { monsters, searchMonstersField } = this.state;
		//const monsters = this.state.monsters;
		//const searchMonstersField = this.state.searchMonstersField;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchMonstersField.toLowerCase());
		});
		return (
			<div className="App">
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleSearchBoxChange}
				/>
				<h6>{this.state.searchMonstersField}</h6>
				<br />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
