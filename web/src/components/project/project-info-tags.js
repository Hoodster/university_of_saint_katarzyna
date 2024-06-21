import { Tag, TagLabel, Text } from "@chakra-ui/react"
import { useCallback } from "react"

function ProjectInfoTags({texts, background, variant = 'solid', borderRadius = 'full'}) {
    const [leftText, rightText] = texts
    const leftBackground = 'black', rightBackground = background;
    const leftColor = 'white', rightColor = 'black';

    const HeaderTag =  useCallback(({text, color, background}) => (
        <Tag variant={variant} borderRadius={borderRadius} bg={background} padding={'8px 12px'} style={{margin: '5px 0'}}>
            <TagLabel>
                <Text as='b' color={color}>{text}</Text>
            </TagLabel>
        </Tag>
    ),[variant, borderRadius])

    return (
        <div>
            <HeaderTag text={leftText} color={leftColor} background={leftBackground} />
            <HeaderTag text={rightText} color={rightColor} background={rightBackground} />
        </div>)
}

export default ProjectInfoTags