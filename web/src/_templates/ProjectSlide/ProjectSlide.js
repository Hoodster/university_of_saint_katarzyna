import { useEffect, useState } from 'react';
import { Project } from '../../components/project/project';
import styles from './ProjectSlide.module.scss'
import { ArrowRightIcon, CheckIcon } from '@chakra-ui/icons'
import { List, ListItem } from '@chakra-ui/react'

function ProjectSlide({headline, subHeadlines, options}) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(options.projects.map(project => (<Project 
            title={project.title} 
            tags={project.tags}
            author={project.author}
            duration={project.duration} 
            level={project.level}
            sections={getSections(project)} />)))
    }, [options, options.projects])

    function getSections(project) {
        const descriptionChunk = {
            headline: 'Description',
            content: project.description,
        }

        const skillsImpChunk = {
            headline: 'Improved Skills',
            content: 'Artificial Intelligence, Machine Learning, Healthcare, Smart Contracts, Supply Chain Management',
            icon: <ArrowRightIcon/>
        }


        const skillsReqChunk = {
            headline: 'RequiredSkills',
            contents: 'Drones, Logistics, Predictive Analytics, Finance, Agriculture',
            icon: <CheckIcon />
        }

        return [
            descriptionChunk,
            skillsImpChunk,
            skillsReqChunk
        ]
    }
    
    return (
        <div className={styles.container}>
            <h1 className={styles.headline} style={{color: 'white'}}>{headline}</h1>
            <div className={styles.subheadlines} style={{color: 'white', fontWeight: '600'}}>{subHeadlines}</div>
            <div className={styles.projects} style={{height:'100vh'}}>
                {projects}
            </div>
        </div>
    )
}

export default ProjectSlide