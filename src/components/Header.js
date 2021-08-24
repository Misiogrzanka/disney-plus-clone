import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import {
	setUserLogin,
	selectUserName,
	selectUserPhoto,
	setSignOut
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
	const history = useHistory();
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			// setIsLoggedIn(true);
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						email: user.email,
						photo: user.photoURL
					})
				);
				// history.push("/");
			}
		});
	}, [dispatch, history]);

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL
				})
			);
			// setIsLoggedIn(true);
			history.push("/");
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push("/login");
			// setIsLoggedIn(false);
		});
	};

	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<a>
							<img src="/images/home-icon.svg" alt="home" />
							<span>HOME</span>
						</a>
						<a>
							<img src="/images/search-icon.svg" alt="search" />
							<span>SEARCH</span>
						</a>
						<a>
							<img src="/images/watchlist-icon.svg" alt="watchlist" />
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src="/images/original-icon.svg" alt="originals" />
							<span>ORIGINALS</span>
						</a>
						<a>
							<img src="/images/movie-icon.svg" alt="movies" />
							<span>MOVIES</span>
						</a>
						<a>
							<img src="/images/series-icon.svg" alt="series" />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<UserImg onClick={signOut} src={userPhoto} />
				</>
			)}
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	align-items: center;
	background: #090b13;
	display: flex;
	height: 70px;
	overflow-x: hidden;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	margin-left: 25px;

	a {
		align-items: center;
		cursor: pointer;
		display: flex;
		padding: 0 12px;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				background: white;
				content: "";
				height: 2px;
				opacity: 0;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}
		&:hover {
			span:after {
				opacity: 1;
				transform: scaleX(1);
			}
		}
	}
`;

const UserImg = styled.img`
	cursor: pointer;
	border-radius: 50%;
	height: 48px;
	width: 48px;
`;

const Login = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	cursor: pointer;
	letter-spacing: 1.5px;
	padding: 8px 16px;
	text-transform: uppercase;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		border-color: transparent;
		color: #000;
	}
`;

const LoginContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;
