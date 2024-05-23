import useTemplate from "@root/_templates/useTemplate"


function Students() {
    const students = window.content.students
    const slidesData = students.slides
    // const options = students.options

    function getTemplate(slide) {
        const s = useTemplate(slide);

        return s;
    }

    const slides = slidesData.map(slide => {
        const f = useTemplate(slide);
        console.log(slide)
        return useTemplate(slide)
    })

    return (
        <div>
            {
                slides
            }
        </div>
    )
}

export default Students
