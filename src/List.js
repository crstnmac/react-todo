import React from "react";

const List = props => (
	<ul>
		{props.map.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);
