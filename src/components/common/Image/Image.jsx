import React from "react";

function Image(props) {
	const { image, imageClass } = props;

	function handleImageLoadError(evt) {
		evt.target.src = "/react-store/static/images/error.png";
	}

	return (
		<span className={imageClass}>
			<img
				src={"/react-store/static/images/" + image}
				alt=""
				onError={handleImageLoadError}
			/>
		</span>
	);
}

export default Image;
