import { Button, Collapse } from '@chakra-ui/react'
import { useState } from 'react';
import styles from './blog.module.scss'

function Article({title, paragraphs, author, creationDate}) {
    const [expand, setExpand] = useState(false);

    const changeExpand = () => setExpand(!expand);

    return (
        <div className={styles.article} onClick={changeExpand}>
            <h2>{title}</h2>
            <div className={styles.info}>
                <div>
                    <span>Author: </span>
                    <span>{author}</span>
                </div>
                <div>
                    <span>Date: </span>
                    <span>{creationDate}</span>
                </div>
            </div>

            <Collapse style={{display: 'flex', flexDirection: 'column'}} startingHeight={30} in={expand}>
                {paragraphs.map(element => (
                    <p>{element}</p>
                ))}
            </Collapse>
            <Button colorScheme='orange' variant='ghost'>read {expand ? 'less' : 'more'}</Button>
        </div>
    );
}

export default Article;