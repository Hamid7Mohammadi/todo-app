import { useState } from "react"


export function TodoInput(props) {

    const [inputValue, setInputValue] = useState('');

    const { handleAddTodo } = props
    
    function handleEnterButton(e) {
        if (e.key == "Enter") {
            if(!inputValue){return}
            handleAddTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className="input-container">
            <input onKeyDown={handleEnterButton} value={inputValue} onChange={(e) => setInputValue(e.target.value) } type="text" placeholder="Add task" />
            <button onClick={() => {
                if(!inputValue) {return}
                handleAddTodo(inputValue);
                setInputValue('');
            }}>
            &#43;
            </button>
        </div>
    )
}