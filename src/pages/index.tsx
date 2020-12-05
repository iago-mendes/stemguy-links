import Image from 'next/image'
import Head from 'next/head'

import Container from '../styles/pages/index'
import logo from '../assets/logo.svg'

const Links: React.FC = () =>
{
  return (
		<Container>
			<Head>
				<title>Links | STEM Guy</title>
			</Head>

			<div className="img">
				<Image src={logo} width={200} height={200} priority />
			</div>
			<ul>
				<a href='https://stemguy.club/how-do-black-holes-work'>Last post</a>
				<a href='https://stemguy.club'>Home page</a>
			</ul>
		</Container>
	)
}

export default Links