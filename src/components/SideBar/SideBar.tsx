import Link from 'next/link';
import React from 'react';
import styles from './sidebar.module.css';

const SideBar = () => {
	const links = [
		{
			id: 1,
			title: 'Kirish',
			url: '/topics/intro',
		},
		{
			id: 2,
			title: 'I BOB. SUG‘URTA BIZNESI FANINING PREDMETI VA OB’YEKTI',
			url: '/topics/module_1',
		},
		{
			id: 3,
			title: 'II BOB. SUG‘URTA BIZNESINI SUG‘URTA FAOLIYATI BO‘YICHA TURKUMLANISHI',
			url: '/topics/module_2',
		},
		{
			id: 4,
			title: 'III BOB. SUG‘URTA MAHSULOTINI YARATISH VA UNI SOTISH TEXNOLOGIYASI',
			url: '/topics/module_3',
		},
		{
			id: 5,
			title:
				'IV BOB. SUG‘URTA BOZORINING INSTITUTSIONAL TUZILISHI VA UNING UMUMIY XARAKTERISTIKASI',
			url: '/topics/module_4',
		},
		{
			id: 6,
			title:
				' V BOB. SUG‘URTA BIZNESIDA SUG‘URTA VOSITACHILARNING TUTGAN O‘RNI VA ULAR BILAN O‘ZARO MUNOSABATLARNI TASHKIL ETIlISHI',
			url: '/topics/module_5',
		},
		{
			id: 7,
			title: ' VI BOB. SUG‘URTA BIZNESIDA MOLIYAVIY FAOLIYATNI BYUDJETLASHTIRISH',
			url: '/topics/module_6',
		},
		{
			id: 8,
			title: 'VII BOB. SUG‘URTA TASHKILOTLARIDA MOLIYAVIY NATIJANING SHAKLLANISHI',
			url: '/topics/module_7',
		},
		{
			id: 9,
			title: ' VIII BOB. AKTUARIYLAR BOSHQARMASI VA UNING FAOLIYATINI TASHKIL ETISH',
			url: '/topics/module_8',
		},
		{
			id: 10,
			title: ' IX BOB. SUG‘URTA ZAHIRALARI: SUG‘URTA ZAHIRALARI VA UNING UMUMIY XARAKTERISTIKASI',
			url: '/topics/module_9',
		},
		{
			id: 11,
			title: 'X BOB. SUG‘URTA BIZNESINI SOLIQQA TORTISH TURLARI VA UNING TARTIBI.',
			url: '/topics/module_10',
		},
		{
			id: 12,
			title:
				'XI BOB. SUG‘URTA TASHKILOTINING AKTUAR HISOBOTI VA UNING AUDITORLIK TEKSHIRUVINI TASHKIL ETISH',
			url: '/topics/module_11',
		},
		{
			id: 13,
			title:
				'XII BOB. SUG‘URTA BIZNESIDA SUG‘URTA TASHKILOTINING BO‘LIMLARI FAOLIYATINI TASHKIL ETISH',
			url: '/topics/module_12',
		},
	];
	return (
		<div className={styles.container}>
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

export default SideBar;
