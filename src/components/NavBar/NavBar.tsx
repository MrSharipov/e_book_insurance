import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';

const links = [
	{
		id: 1,
		title: 'Bosh sahifa',
		url: '/',
	},
	{
		id: 2,
		title: 'Modullar',
		url: '/topics/intro',
	},
	{
		id: 3,
		title: "Video ma'ruzalar",
		url: '/videos',
	},
	{
		id: 4,
		title: 'Prezentatsiyalar',
		url: '/presentations',
	},
	{
		id: 5,
		title: "Mustaqil ta'lim",
		url: '/extra',
	},
	{
		id: 6,
		title: 'Mualliflar haqida',
		url: '/about',
	},
];

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>
				Sug'urta biznesi
			</Link>
			<div className={styles.links}>
				{links.map((link) => (
					<Link key={link.id} href={link.url} className={styles.link}>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
