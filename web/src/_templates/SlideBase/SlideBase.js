import { Button } from "@chakra-ui/react"
import styles from './SlideBase.module.scss'
import useGetBackground, { SourceType } from "../../hooks/useGetBackground"

function SlideBase({ bgSource, headline, subHeadlines, options }) {
    const Background = useGetBackground(bgSource, SourceType.video)
    return (
        <div key={options.key} className={styles.slide}>
            <Background />
            <h1>{headline}</h1>
            {subHeadlines.map(sub => <h2>{sub}</h2>)}
            {options.actionButtons
                ? options.actionButtons.map(button =>
                    <Button key={button.name} title={button.name} onClick={() => alert('click')} />
                )
                : <></>}
        </div>
    )
}

export default SlideBase
