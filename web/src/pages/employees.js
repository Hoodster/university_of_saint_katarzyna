import content from '../_content'

function Employees() {
    const employeesContent = content.employees

    return (
        <div key={'employees'}>
            {employeesContent.slides.map(x =>
                <div style={{ height: '100vh', width: '100vh' }}>
                    <h1 style={{ font: 'Futura', bottom: 20, left: 10, fontWeight: 'bold', fontSize: '30px', wordWrap: 'break-word' }}>
                        {x.headline}
                    </h1>
                    {x.subHeadlines.map(s => <h3 key={s}>{s}</h3>)}
                </div>
            )}
        </div>
    )
}

export default Employees
