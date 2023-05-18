import React, {useState, useEffect}  from "react";
import Task from "./task";

const Todo_list = () => {

    const [listItems, setListItems] = useState([]); 

    useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2")
        .then (response => {
			return Response.json()
		})
		.then (response => {
			setListItems(response)
		})

	}, [])

    return(
        <div className="row">
            <h1>TASK LIST</h1>
            {
                listItems.map((task) => {
                    return (
                        <div className="row">
                            <task label={task.label} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Todo_list;