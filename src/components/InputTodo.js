import React, { Component } from 'react';

class InputTodo extends React.Component {
	state = {
		title: '',
	};

	onChange = (el) => {
		this.setState({
			[el.target.name]: el.target.value,
		});
	};

	handleSubmit = (el) => {
		el.preventDefault();
		if (this.state.title.trim()) {
			this.props.addTodoProps(this.state.title);
			this.setState({
				title: '',
			});
		} else {
			alert('Please write item');
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Add Todo..."
					alue={this.state.title}
					name="title"
					onChange={this.onChange}
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default InputTodo;
