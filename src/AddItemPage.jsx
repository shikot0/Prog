import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {LearningListContext} from './GlobalContext';
import './AddItemPage.css'; 

function AddItemPage() {
    const [progressValue, setProgressValue] = useState(0);
    const [technologyValue, setTechnologyValue] = useState('React');
    const {learningList, setLearningList} = useContext(LearningListContext);

    function addItem() {
        const alreadyPresent = learningList.some(item => {
           return item.technology.toLowerCase() === technologyValue.toLowerCase();
        })
        if(alreadyPresent) {
            alert('Item is already present in the list')
            return
        }else {
            setLearningList(prevList => {
                return [...prevList, {technology: technologyValue, progress: progressValue}]
            })
            localStorage.setItem('savedItems', JSON.stringify([...learningList, {technology: technologyValue, progress: progressValue}]))
        }
    }

    return(
        <section id="add-item-page">
            <h2>Add a new Item</h2>
            <Link to={`/`} className="back-button">Home</Link>
            <form>
                <div className="form-item-div">
                    <label htmlFor="technology-input">Technology:</label>
                    <select id="technology-input" value={technologyValue} onInput={e => setTechnologyValue(e.target.value)}>
                        <option value="React">React</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Python">Python</option>
                        <option value="NodeJS">NodeJS</option>
                    </select>
                </div>
                <div className="form-item-div">
                    <label htmlFor="technology-progress">Progress so far: {progressValue}%</label>
                    <input type="range" value={progressValue} id="progress-input" onInput={e => setProgressValue(e.target.value)}/>
                </div>
                <Link to={`/`} onClick={addItem} type="submit" className="add-item-button">Add Item</Link>
            </form>
        </section>
    )
}

export default AddItemPage;