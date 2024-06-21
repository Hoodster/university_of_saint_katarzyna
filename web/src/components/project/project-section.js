import { 
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel ,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon
} from "@chakra-ui/react"
import { getSkillName } from "../../_content/_projects"

const Section = ({children: {headline, content, contents, icon = null}}) => {
    const setItem = () => { 
        if (typeof content == 'string') return <Text>{content}</Text>
        const items = content.map(listItem => (
            <ListItem key={listItem}>
                {icon ?? <ListIcon>{icon}</ListIcon>}
                {listItem}
            </ListItem>
        ))

        return <List>{items}</List>
    }

    return (
        <AccordionItem>
            <AccordionButton>
                <Heading size='md' flex='1' color={'black'} textAlign='left'>{headline}</Heading>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                {content ?? <Text>{content}</Text>} 
            </AccordionPanel>
        </AccordionItem>
    )
}

function ProjectSections({sections: [section_1, section_2, section_3]}) {
    return (
        <Accordion allowToggle>
            <Section>{section_1}</Section>
            <Section>{section_2}</Section>
            <Section>{section_3}</Section>
        </Accordion>
    )
}

export default ProjectSections