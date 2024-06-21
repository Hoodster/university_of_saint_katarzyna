import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Text,
  } from '@chakra-ui/react'
 // import { ArrowRightIcon, CheckIcon } from '@chakra-ui/icons'
import ProjectInfoTags from './project-info-tags'
import ProjectSections from './project-section'
import ProjectFooter from './project-footer'
  
  export const Project = ({title, author, duration, tags, level, sections}) => {

    const levelColors = {
      'BC': 'green',
      'MS': 'orange',
      'PHD': 'red'
    }

    const setBackgroundToLevel = (level) => {
      const levels = level.split('-')
      if (levels.length > 1) {
        return `linear(to-r, ${levelColors[levels[0]]}, ${levelColors[levels[1]]})`
      }

      return levelColors[levels[0]]
    }

    return (
      <Card variant="elevated">
        <CardHeader>
          <div
            style={{
              width: '100%',
              display: 'inline-flex',
              justifyContent: 'space-between',
            }}
          >
            <Heading size={'lg'} color='black'>{title}</Heading>
            <ProjectInfoTags texts={[`${duration} semesters`, level]} background={setBackgroundToLevel(level)}/>
          </div>
          <Text as="i" color={'black'}>{author}</Text>
        </CardHeader>
        <CardBody>
          <ProjectSections sections={sections} />
        </CardBody>
        <CardFooter>
          <ProjectFooter tags={tags} />
        </CardFooter>
      </Card>
    )
  }
  