import ParallaxContainer from "../components/parallax/ParallaxContainer";
import ParallaxSection from "../components/parallax/ParallaxSection";


function Students() {
    const students = window.content.students
    const slidesData = students.slides
    // const options = students.options
    return (
        <ParallaxContainer>
            {slidesData.map((slide, i) => <ParallaxSection key={`student-sect-${i}`} headline={slide.headline} subHeadlines={slide.subHeadlines} />)}
        </ParallaxContainer>
    )
}

export default Students
