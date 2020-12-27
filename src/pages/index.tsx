import Image from 'next/image'
import Head from 'next/head'
import {GetStaticProps} from 'next'

import Container from '../styles/pages/index'
import logo from '../assets/logo.svg'
import api from '../services/api'

interface Post
{
	id: string
	url_id: string
	title: string
	description: string
	date: string
	image:
	{
		url: string
		alt: string
		width: number
		height: number
	}
	flags: Array<{name: string, color: string}>
}

interface LinksProps
{
	lastPost: Post
}

const Links: React.FC<LinksProps> = ({lastPost}) =>
{
	const url = `https://stemguy.club/${lastPost.url_id}`

  return (
		<Container>
			<Head>
				<title>Links | STEM Guy</title>
			</Head>

			<div className="img">
				<Image src={logo} width={200} height={200} priority />
			</div>
			<ul>
				<a href={url}>Last post</a>
				<a href='https://stemguy.club'>Home page</a>
			</ul>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	let posts: Post[] = []
	await api.get('posts').then(({data}:{data: Post[]}) => posts = data)

	posts.sort((a,b) => a.date < b.date ? 1 : -1)
	const lastPost = posts[0]

	return {
		props: {lastPost},
		revalidate: 1
	}
}

export default Links