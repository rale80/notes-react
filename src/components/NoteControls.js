import React from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import styles from './NoteControls.module.css';

class Controls extends React.Component {
	state = {
		title: '',
		content: ''
	};

	onTitleChange = e => {
		this.setState({ title: e.target.value });
	};
	onContentChange = e => {
		this.setState({ content: e.target.value });
	};

	onShowAddForm = e => {
		this.setState({ title: '', content: '' });
		this.props.onShowAddForm();
	};
	onShowEditForm = e => {
		this.setState({
			title: this.props.currentNote ? this.props.currentNote.title : '',
			content: this.props.currentNote ? this.props.currentNote.content : ''
		});
		this.props.onShowEditForm();
	};

	onAdd = e => {
		e.preventDefault();
		const note = {
			id: Date.now(),
			title: this.state.title,
			content: this.state.content
		};
		this.props.addNote(note);
	};
	onEdit = e => {
		e.preventDefault();
		const updatedNote = {
			id: this.props.currentNote.id,
			title: this.state.title,
			content: this.state.content
		};
		this.props.editNote(updatedNote);
	};
	onDelete = e => {
		e.preventDefault();
		this.setState({ title: '', content: '' });
		const noteToDelId = this.props.currentNote.id;
		this.props.deleteNote(noteToDelId);
	};

	render() {
		let noteContent = '';

		if (this.props.showAddForm) {
			noteContent = (
				<form onSubmit={this.onAdd}>
					<div className={styles.inputs}>
						<input
							type="text"
							placeholder="Note Title"
							value={this.state.title}
							onChange={this.onTitleChange}
						/>
						<textarea
							value={this.state.content}
							placeholder="Enter Note Here"
							onChange={this.onContentChange}></textarea>
						<button type="submit" className="btn">
							ADD
						</button>
					</div>
				</form>
			);
		} else if (this.props.showEditForm && this.props.currentNote) {
			noteContent = (
				<form onSubmit={this.onEdit}>
					<div className={styles.inputs}>
						<input
							type="text"
							placeholder="Note Title"
							value={this.state.title}
							onChange={this.onTitleChange}
						/>
						<textarea
							value={this.state.content}
							onChange={this.onContentChange}></textarea>
						<button type="submit" className="btn">
							EDIT
						</button>
					</div>
				</form>
			);
		} else {
			if (this.props.currentNote !== null) {
				noteContent = (
					<div className={styles.inputs}>{this.props.currentNote.content}</div>
				);
			} else {
				noteContent = (
					<div className={styles.noNotes}>
						There isn't any notes, or note is not selected
					</div>
				);
			}
		}

		return (
			<div className={styles.NoteControls}>
				<div className={styles.buttons}>
					<button className="btn" onClick={this.onShowAddForm}>
						<FaPlus />
					</button>
					<button className="btn" onClick={this.onShowEditForm}>
						<FaEdit />
					</button>
					<button className="btn" onClick={this.onDelete}>
						<FaTrash />
					</button>
				</div>
				{noteContent}
			</div>
		);
	}
}

export default Controls;
