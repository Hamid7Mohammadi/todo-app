

export function Tabs(props) {

    const {todos, selectedTab , setSelectedTab} = props

    const tabs = ["All", "Open", "Completed"];

    return (
        <nav className="tab-container">

            {tabs.map((tab, tabIndex) => {

                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === "Open" ?
                        todos.filter((item) => !item.complete).length
                        : todos.filter((item) => item.complete).length;
                      
         
                return (
                    <button
                        onClick={()=> {setSelectedTab(tab)}}
                        key={tabIndex} className={"tab-button " +
                        (tab === selectedTab ? "tab-selected" : '')} >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}