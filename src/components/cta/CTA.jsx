import React from "react";
import "./cta.css";

function CTA({ text = "default", type = "primary", href, onClick}) {
	return (
		<a href={href}>
			<button className={`btn btn-${type}`}
				onClick={onClick}
			>
				{text}
			</button>
		</a>
	);
}

export default CTA;
