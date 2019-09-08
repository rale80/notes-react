import React from 'react';
import NotesList from './NotesList';
import NoteControls from './NoteControls';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		notes: [],
		showAddForm: false,
		showEditForm: false,
		currentNote: null
	};

	handleShowAddForm = e => {
		this.setState({ showAddForm: true });
		this.setState({ showEditForm: false });
	};
	handleShowEditForm = e => {
		this.setState({ showEditForm: true });
		this.setState({ showAddForm: false });
	};

	handleAddNote = newNote => {
		this.setState({
			notes: [newNote, ...this.state.notes],
			currentNote: newNote,
			showAddForm: false
		});
	};
	handleEditNote = updatedNote => {
		let tempNotes = [...this.state.notes];
		tempNotes = tempNotes.filter(note => {
			return note.id !== updatedNote.id;
		});

		this.setState({
			notes: [updatedNote, ...tempNotes],
			showEditForm: false,
			currentNote: updatedNote
		});
	};
	handleDeleteNote = delNoteId => {
		let tempNotes = [...this.state.notes];
		tempNotes = tempNotes.filter(note => {
			return note.id !== delNoteId;
		});

		this.setState({
			notes: [...tempNotes],
			currentNote: tempNotes[0] ? tempNotes[0] : null
		});
	};

	displayNoteHandler = id => {
		this.setState({ showAddForm: false, showEditForm: false });
		const noteToDisplay = this.state.notes.find(note => note.id === id);
		this.setState({ currentNote: noteToDisplay });
	};

	render() {
		return (
			<div className={styles.App}>
				<>
					<NotesList
						notes={this.state.notes}
						onDisplayNote={this.displayNoteHandler}
						currentNote={this.state.currentNote}
					/>
					<NoteControls
						addNote={this.handleAddNote}
						editNote={this.handleEditNote}
						deleteNote={this.handleDeleteNote}
						onShowAddForm={this.handleShowAddForm}
						onShowEditForm={this.handleShowEditForm}
						showAddForm={this.state.showAddForm}
						showEditForm={this.state.showEditForm}
						currentNote={this.state.currentNote}
					/>
				</>
			</div>
		);
	}
}

export default App;
