import SideBar from '@/components/SideBar/SideBar';
import React from 'react';
import styles from './page.module.css';

const layout = ({children}: {children: React.ReactNode}) => {
	return (
		<div className={styles.container}>
			<div className={styles.item1}>
				<SideBar />
			</div>
			<div className={styles.item2}>{children}</div>
		</div>
	);
};

export default layout;
