import React from 'react';

export default class Button extends React.Component{
	render() {
		const {handler, classNames} = this.props;
		return (
			<button
				onClick={handler}
				type="submit"
				class={classNames.join(' ')}
			>
				{this.props.children}
			</button>
		);
	}
}

