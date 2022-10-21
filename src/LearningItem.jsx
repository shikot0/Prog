import {useContext} from 'react';
import {LearningListContext} from './GlobalContext';
import {Link} from 'react-router-dom'

function LearningItem({data}) {
    const {learningList, setLearningList} = useContext(LearningListContext);
    function deleteItem(e) {
        learningList.splice([...e.target.parentElement.parentElement.childNodes].indexOf(e.target.parentElement), 1)
        let modifiedList = learningList;
        setLearningList([...modifiedList])
        localStorage.setItem('savedItems', JSON.stringify(modifiedList))
    }
    return(
        <div className="learning-item">
            {/* <img className="item-logo" src={`${process.env.PUBLIC_URL}/logos/logo-${data.technology.toLowerCase()}.svg`} alt="" /> */}
            <Link to={`edit-item/${data.technology}`}>
                <img className="item-logo" src={`${process.env.PUBLIC_URL}/logos/logo-${data.technology.toLowerCase()}.svg`} alt="" />
                <h3>{data.technology}</h3>
                <div className="progress-section">
                    <small>Progress: {data.progress}%</small>
                    <progress value={data.progress} max="100"></progress>
                </div> 
            </Link>
            <button className="delete-button" onClick={deleteItem}></button>
        </div>
    )
}

export default LearningItem;