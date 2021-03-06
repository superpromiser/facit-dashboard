import * as React from 'react';

function SvgSkipEndCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z' />
			<path d='M6.271 5.055a.5.5 0 01.52.038L9.5 7.028V5.5a.5.5 0 011 0v5a.5.5 0 01-1 0V8.972l-2.71 1.935A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z' />
		</svg>
	);
}

export default SvgSkipEndCircle;
