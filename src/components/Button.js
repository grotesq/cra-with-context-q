import React from 'react';
import { withContext } from 'context-q';

let Button = props => (
	<button onClick={() => props.context.update( { count: props.context.count + 1 } )}>
		Add count
	</button>
);

export default withContext( Button );
