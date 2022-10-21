import {useEffect, useContext} from 'react';
import LearningItem from './LearningItem';
import {Link} from 'react-router-dom';
import {LearningListContext} from './GlobalContext';

function CurrentlyLearning() {
    const {learningList, setLearningList} = useContext(LearningListContext);


    useEffect(() => {
        function loadItems() {
            localStorage.getItem('savedItems') !== null ? setLearningList(JSON.parse(localStorage.getItem('savedItems'))) : setLearningList([]);
        }
        loadItems();
    }, [setLearningList])
    
    return(
        <section id="currently-learning-section">
            <header>
                <h2>Currently Learning</h2>
                <Link to={`/add-item`} className="add-item-link"><img src={`${process.env.PUBLIC_URL}/logos/add-item-section-link.svg`} alt="add button" /></Link>
            </header>
            <div className="currently-learning-wrapper">
                {learningList && learningList.map((listItem, index) => {
                    return <LearningItem data={listItem} key={index} />
                })}
                {learningList.length === 0 && <p className="hint">Add some items to get started!</p>}
                {/* <p className="hint">Add some items to get started!</p> */}
            </div>
        </section>
    )
}

export default CurrentlyLearning;