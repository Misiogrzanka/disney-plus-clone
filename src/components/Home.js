import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import LoadingSpinner from "./LoadingSpinner";

function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		db.collection("movies").onSnapshot((snapshot) => {
			let tempMovies = snapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			setIsLoading(false);
			dispatch(setMovies(tempMovies));
		});
	}, [dispatch]);

	return (
		<Container>
			{!isLoading ? (
				<>
					<ImgSlider />
					<Viewers />
					<Movies />
				</>
			) : (
				<LoadingSpinner />
			)}
		</Container>
	);
}

export default Home;

const Container = styled.main`
	min-height: calc(100vh - 70px);
	overflow-x: hidden;
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	padding-bottom: 20px;

	&:before {
		background: url("/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
