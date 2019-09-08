import React from 'react';
import styles from './Note.module.css';

const Note = props => {
	const formatDate = dateStr => {
		const date = new Date(dateStr).toDateString();
		const time = `${formatTime(new Date(dateStr).getHours())}:${formatTime(
			new Date(dateStr).getMinutes()
		)}`;
		return `${date}, ${time}`;
	};

	const formatTime = time => {
		if (time.toString().length === 1) {
			return `0${time}`;
		} else {
			return time;
		}
	};

	return (
		<li
			onClick={props.displayNote}
			className={
				props.current && props.current.id === props.id ? styles.selected : null
			}>
			<h4>{props.note.title}</h4>
			<small>{formatDate(props.note.id)}</small>
			<input type="hidden" value={props.note.id} />
		</li>
	);
};

export default Note;
