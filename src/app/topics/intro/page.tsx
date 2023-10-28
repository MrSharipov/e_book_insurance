import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';

const TopicZero = () => {
	return (
		<div className={styles.page}>
			<h3 className={styles.heading}>Kirish</h3>
			<div className={styles.imgWrapper}>
				<Image className={styles.img} src="/files/insurance.webp" alt="insurance" fill={true} />
			</div>

			<p>
				Respublikamiz sug’urta bozorini yanada rivojlantirish, aholini sifatli moliyaviy xizmatlar
				bilan qamrab olish ko’lamini kengaytirish, sug’urta tashkilotlari faoliyatini
				qo’llab-quvvatlash, shuningdek, ushbu sohada iste’molchilarning huquqlarini va qonuniy
				manfaatlarini himoya qilish uchun qulay shart-sharoitlar yaratish chora-tadbirlari izchil
				amalga oshirilmoqda.
			</p>
			<p>
				2017-2021 yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi
				bo‘yicha Harakatlar strategiyasini “Faol investitsiyalar va ijtimoiy rivojlanish yili”da
				amalga oshirishga oid davlat dasturiga sug‘urta bozorini isloh qilish va jadal
				rivojlantirish maqsadida “Sug‘urta faoliyati to‘g‘risida”gi Qonunni yangi tahrirda ishlab
				chiqish, barcha majburiy sug‘urta turlarini yagona hujjatga mujassamlashtirish va majburiy
				sug‘urtalanadigan faoliyat turlarini kengaytirish, banklarga sug‘urta agenti maqomini berish
				hamda interaktiv, shu jumladan onlayn sug‘urta xizmatlarini kengaytirish masalalari
				kiritildi.
			</p>
			<p>
				Shu bilan bir qatorda 2017-2021 yillarda O‘zbekiston Respublikasini rivojlantirishning
				beshta ustuvor yo‘nalishi bo‘yicha harakatlar strategiyasini “Faol tadbirkorlik, innovatsion
				g‘oyalar va texnologiyalarni qo‘llab-quvvatlar yili”da ilg‘or xorijiy tajriba asosida tibbiy
				sug‘urta mexanizmlarini bosqichma-bosqich joriy etish bo‘yicha konsepsiya ishlab chiqish
				kabi vazifalar belgilab berildi . Shuningdek O’zbekiston Respublikasi Prezidentining 2019
				yil 2 avgustda “O’zbekiston Respublikasining sug’urta bozorini isloh qilish va uning jadal
				rivojlanishini ta’minlash chora-tadbirlari to’g’risida”gi PQ-4412-sonli qaroriga asosan
				O’zbekiston Respublikasining sug’urta bozorini isloh qilish va jadal rivojlantirishning
				asosiy yo’nalishlari belgilab berildi .
			</p>
			<p>
				Mazkur o'quv-qo'llanmada sug‘urta biznesi fanining predmeti va ob’yekti, sug‘urta biznesini
				sug‘urta faoliyati bo‘yicha turkumlanishi, sug‘urta mahsulotini sotish va uni yaratish
				texnologiyasi, sug‘urta bozorining institutsional tuzilishi va uning umumiy
				xarakteristikasi, sug‘urta biznesida sug‘urta vositachilarning tutgan o‘rni va ular bilan
				o‘zaro munosabatlarni tashkil etilishi, sug‘urta biznesida moliyaviy faoliyatni
				byudjetlashtirish, sug‘urta tashkilotlarida moliyaviy natijaning shakllanishi, aktuariylar
				boshqarmasi va uning faoliyatini tashkil etish, sug‘urta zahiralari: sug‘urta zahiralari va
				uning umumiy xarakteristikasi, sug‘urta biznesini soliqqa tortish turlari va uning tartibi,
				sug‘urta tashkilotining aktuar hisoboti va uning auditorlik tekshiruvini hamda sug‘urta
				tashkilotining bo‘limlar faoliyatini tashkil etish bo’yicha nazariy va amaliy jihatlari o'z
				aksini topgan.
			</p>
		</div>
	);
};

export default TopicZero;
