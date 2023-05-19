import React, {useState, useEffect}  from "react";

const Todo_list = () => {

    const [listItems, setListItems] = useState([]); 

    useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2")
        .then (response => {
			return response.json()
		})
		.then (response => {
			setListItems(response)
		})

	}, [])


    return(
        <div className="row">
            <h1>TASK LIST</h1>
            <ul>
                {
                    listItems.map((list,index) => {
                        return (
                            <li key={index}>{list.label} {list.done}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Todo_list;