import React from "react";
import styled from "styled-components";

function Detail() {
	return (
		<Container>
			<Background>
				<img
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
					alt="details"
				/>
			</Background>
			<ImageTitle>
				<img
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
					alt="title"
				/>
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" alt="playButton" />
					<span>PLAY</span>
				</PlayButton>
				<TrailerButton>
					<img src="/images/play-icon-white.png" alt="trailerButton" />
					<span>Trailer</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src="/images/group-icon.png" alt="groupWatchButton" />
				</GroupWatchButton>
			</Controls>
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	display: flex;
	align-items: center;

	background-color: rgb(249, 249, 249);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 15px;
	height: 56px;
	letter-spacing: 1.8px;
	margin-right: 22px;
	padding: 0 24px;

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
`;

const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background: rgba(0, 0, 0, 0.6);
	border: 2px solid white;
	border-radius: 50%;
	cursor: pointer;
	margin-right: 16px;

	height: 44px;
	width: 44px;

	span {
		color: white;
		font-size: 30px;
	}
`;

const GroupWatchButton = styled(AddButton)`
	background: black;
`;