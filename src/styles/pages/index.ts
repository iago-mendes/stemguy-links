import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${p => p.theme.colors.primary};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	.img
	{
		background-color: #fff;
		border-radius: 100rem;
		padding: 1rem;
	}

	ul
	{
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 20rem;

		a
		{
			width: 100%;
			padding-top: 1rem;
			padding-bottom: 1rem;
			text-align: center;

			background-color: #0a1e38;
			color: ${p => p.theme.colors.background};

			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2rem;
			text-decoration: none;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			transition: 0.25s;

			:hover
			{
				transform: scale(1.05);
			}

			h1
			{
				font-size: 2rem;
			}

			h2
			{
				font-size: 1rem;
			}
		}
	}
`

export default Container