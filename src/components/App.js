import React from 'react';
import NotesList from './NotesList';
import NoteControls from './NoteControls';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		notes: [
			{
				id: 1567700401288,
				title: 'First Note'
			}
		]
	};

	render() {
		return (
			<div className={styles.App}>
				<>
					<NotesList notes={this.state.notes} />
					<NoteControls />
				</>
			</div>
		);
	}
}

export default App;
