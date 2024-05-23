import content from '../_content'

function Home() {
    const homeContent = content.home

    return (
        <div key={'students'}>
            {homeContent.slides.map(x =>
                <div style={{ height: '100vh', width: '100vh' }}>
                    <h1 style={{ font: 'Futura', bottom: 20, left: 10, fontSize: '30px', fontWeight: 'bold' }}>
                        {x.headline}
                    </h1>
                    {x.subHeadlines.map(s => <h3 key={s}>{s}</h3>)}
                </div>
            )}
        </div>
    )
}

export default Home
