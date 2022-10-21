import {useParams} from 'react-router-dom';
import {useState, useContext} from 'react';
import {LearningListContext} from './GlobalContext';
import {Link} from 'react-router-dom'
import './EditItemPage.css';

function EditItemPage() {

    const {learningList, setLearningList} = useContext(LearningListContext);
    const {item} = useParams();
    const itemDetails = learningList.filter((listItem) => {
        return listItem.technology.toLowerCase() === item.toLowerCase();
    })
    const prevIndex = learningList.indexOf(...itemDetails)
    const [newProgress, setNewProgress] = useState(itemDetails[0].progress);
    

    function handleChange() {
        setLearningList(prevList => {
            let splicedList = prevList;
            splicedList.splice(prevIndex, 1);
            splicedList.splice(prevIndex,0,{technology: item, progress: newProgress});
            return splicedList;
        })
        localStorage.setItem('savedItems', JSON.stringify(learningList))
    }

    return(
        <section id="edit-item-page">
            <h2>Edit progress</h2>
            <Link to={`/`} className="back-button">Home</Link>
            <form>
                <div className="form-item-div">
                    <label htmlFor="technology-progress">Progress so far: {newProgress}%</label>
                    <input type="range" value={newProgress} id="progress-input" onInput={e => setNewProgress(e.target.value)}/>
                </div>
                <Link to={`/`} onClick={handleChange} className="submit-btn">Submit</Link>
            </form>
        </section>
    )
}

export default EditItemPage;