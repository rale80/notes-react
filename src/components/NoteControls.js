import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import styles from './NoteControls.module.css';

const Controls = props => {
	const handleAdd = e => {
		e.preventDefault();
		alert('add');
	};
	const handleEdit = e => {
		e.preventDefault();
		alert('edit');
	};
	const handleDelete = e => {
		e.preventDefault();
		alert('delete');
	};

	return (
		<div className={styles.NoteControls}>
			<form onSubmit={handleAdd}>
				<div>
					<input type="text" placeholder="Note Title" />
					<button type="submit" className="btn">
						<FaPlus />
					</button>
					<button className="btn" onClick={handleEdit}>
						<FaEdit />
					</button>
					<button className="btn" onClick={handleDelete}>
						<FaTrash />
					</button>
				</div>

				<textarea></textarea>
			</form>
		</div>
	);
};

export default Controls;
