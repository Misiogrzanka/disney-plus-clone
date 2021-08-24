import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import LoadingSpinner from "./LoadingSpinner";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState();

	useEffect(() => {
		db.collection("movies")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setMovie(doc.data());
				} else {
				}
			});
	}, [id]);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} alt="details" />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt="title" />
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
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
			{!movie && <LoadingSpinner />}
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
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	z-index: -1;
	opacity: 0.8;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;
	margin-top: 60px;

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	margin-top: 30px;
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

	&:hover {
		background: rgba(89, 89, 100, 0.6);
	}
`;

const GroupWatchButton = styled(AddButton)`
	background: black;
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	max-width: 760px;
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
`;
