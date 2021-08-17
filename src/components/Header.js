import React from "react";

import styled from "styled-components";

function Header() {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
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
			<UserImg src="/images/Profilowe.jpg" />
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
