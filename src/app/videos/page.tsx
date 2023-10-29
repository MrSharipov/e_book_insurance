import React from 'react';
import styles from './page.module.css';

const YouTubeVideos = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<iframe
					className={styles.video}
					src={'https://www.youtube.com/embed/' + 'TRBuLHn_Pfg'}
					title={"Sug'urta nima"}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<h1>Sug'urta nima</h1>
			</div>
			<hr />
			<div className={styles.item}>
				<iframe
					className={styles.video}
					src={'https://www.youtube.com/embed/' + 'ys9DuW9FcAc'}
					title={"Sug'urta nima"}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<h1>Tashkent Insurance Conference (Part 1)</h1>
			</div>
			<hr />
			<div className={styles.item}>
				<iframe
					className={styles.video}
					src={'https://www.youtube.com/embed/' + 'ys9DuW9FcAc'}
					title={"Sug'urta nima"}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<h1>Tashkent Insurance Conference (Part 2)</h1>
			</div>
			<hr />
		</div>
	);
};

export default YouTubeVideos;
