import React from 'react';
import Note from './Note';
import styles from './NoteList.module.css';

const NotesList = props => {
	return (
		<div className={styles.NoteList}>
			<ul>
				{props.notes.map(note => (
					<Note note={note} />
				))}
			</ul>
		</div>
	);
};

export default NotesList;
