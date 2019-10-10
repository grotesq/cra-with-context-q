import React from 'react';
import { withContext } from 'context-q';

let Viewer = props => (
	<div>Count : {props.context.count}</div>
);

export default withContext( Viewer );
