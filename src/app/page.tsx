import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<Image className={styles.img} src="/business-insurance.png" fill={true} alt="rasm" />
			</div>
			<h1 className={styles.heading}>SUG'URTA BIZNESI</h1>
		</div>
	);
}
