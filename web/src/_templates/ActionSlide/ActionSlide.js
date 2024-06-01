import styles from './ActionSlide.module.scss';
import { Link } from 'react-router-dom';

function ActionSlide({ headline, subHeadlines, options }) {
	const actionButtons = options.actionButtons

	return (
		<div className={styles.container}>
			<h1 className={styles.headline}>{headline}</h1>
			<div className={styles.subheadlines}>
				{subHeadlines.map((subHeadline, i) => (<h2 key={`options-${i}`}>{subHeadline}</h2>))}
			</div>
			<div className={styles.action}>
				{actionButtons.map(action => <Link to={action.url}>{action.name}</Link>)}
			</div>
		</div>
	)
}

export default ActionSlide