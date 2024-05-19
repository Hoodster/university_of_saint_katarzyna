import content from '../content'
import getTemplate from '../templates/templateService'

function Students() {
    const slidesData = content.students.slides
    const options = content.students.options

    const slides = slidesData.map(slide => (
        <div>
            <h1>{slide.headline}</h1>
            {slide.subHeadlines.map((subHeadline, i) =>
                <h3 key={i}>{subHeadline}</h3>
            )}
        </div>
    ))

    return (
        <div>
            {
                slides
            }
        </div>
    )
}

export default Students
