import { Button, Collapse } from '@chakra-ui/react'
import { useState } from 'react';

function Article({title, paragraphs, author, creationDate}) {
    const [expand, setExpand] = useState(false);

    const changeExpand = () => setExpand(!expand);

    return (
        <div onClick={changeExpand}>
            <h2>{title}</h2>
            <div>
                <div>
                <span style={{fontWeight:'700'}}>Author: </span>
                <span>{author}</span>
                </div>
                <span>{creationDate}</span>
            </div>
            <Collapse style={{display: 'flex', flexDirection: 'column'}} startingHeight={30} in={expand}>
                {paragraphs.map(element => (
                    <p>{element}</p>
                ))}
            </Collapse>
            <Button>read {expand ? 'more' : 'less'}</Button>
        </div>
    );
}

export default Article;