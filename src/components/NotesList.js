import React from 'react';
import Note from './Note';
import styles from './NoteList.module.css';

const NotesList = props => {
	const onDisplayNote = id => {
		props.onDisplayNote(id);
	};

	return (
		<div className={styles.NoteList}>
			<ul>
				{props.notes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						note={note}
						displayNote={() => onDisplayNote(note.id)}
						current={props.currentNote}
					/>
				))}
			</ul>
		</div>
	);
};

export default NotesList;
