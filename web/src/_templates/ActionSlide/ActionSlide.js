import styles from './ActionSlide.module.scss';

function ActionSlide({ headline, subHeadlines, options }) {
	const actionButtons = options.actionButtons

	return (
		<div className={styles.container}>
			<h1 className={styles.headline}>{headline}</h1>
			{subHeadlines.map((subHeadline, i) => (<h2 key={`options-${i}`}>{subHeadline}</h2>))}
			{actionButtons.map(x => <h3 id=''>{x}</h3>)}
		</div>
	)
}

export default ActionSlide