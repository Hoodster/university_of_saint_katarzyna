import { Button } from "@chakra-ui/react"

function BasicSlide({bgSource, headline, subHeadlines, options}) {

    return (
    <div>
        <h1>{headline}</h1>
        {subHeadlines.map(sub => <h2>{sub}</h2>)}
        {options.actionButtons 
        ? options.actionButtons.map(button => 
            <Button key={button.name} title={button.name} onClick={() => alert('click')}/>
        )
        : <></>}
    </div>
    )
}

export default BasicSlide
