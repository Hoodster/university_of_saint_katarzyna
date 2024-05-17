import content from '../content'
import getTemplate from '../templates/templateService'

function Students() {
    const studentsContent = content.students

    return (
        <div key={'students'}>
            {studentsContent.slides.map(slide => getTemplate(slide))}
        </div>
    )
}

export default Students
