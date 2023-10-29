import React from 'react';
import styles from './googleSlides.module.css';

const GoogleSlides = () => {
	const slides = [
		{
			id: 1,
			link: 'https://docs.google.com/presentation/d/e/2PACX-1vSlTsepk-Gkl25Q0Mz5Cgw0Awgk0EuznHTXa2UFWePGq1-WHuCQTxZ8g85QZHbJew/embed?start=false&loop=false&delayms=3000',
		},
		{
			id: 2,
			link: 'https://docs.google.com/presentation/d/e/2PACX-1vSM2OB1X_pYSKZevMT8PxB88Txa5ptE5W_oMxgfMnB20XgmtH2lmh7LM0vMj4Q4Nw/embed?start=false&loop=false&delayms=3000',
		},
		{
			id: 3,
			link: 'https://docs.google.com/presentation/d/e/2PACX-1vSM2OB1X_pYSKZevMT8PxB88Txa5ptE5W_oMxgfMnB20XgmtH2lmh7LM0vMj4Q4Nw/embed?start=false&loop=false&delayms=3000',
		},
		{
			id: 4,
			link: 'https://docs.google.com/presentation/d/e/2PACX-1vSlTsepk-Gkl25Q0Mz5Cgw0Awgk0EuznHTXa2UFWePGq1-WHuCQTxZ8g85QZHbJew/embed?start=false&loop=false&delayms=3000',
		},
	];
	return (
		<div className={styles.container}>
			{slides.map((slide) => (
				<div key={slide.id} className={styles.slideWrapper}>
					<div className={styles.count}>{slide.id}</div>
					<iframe
						className={styles.slide}
						src={slide.link}
						frameBorder="0"
						width="480"
						height="389"
						allowFullScreen={true}
					></iframe>
				</div>
			))}
		</div>
	);
};

export default GoogleSlides;
