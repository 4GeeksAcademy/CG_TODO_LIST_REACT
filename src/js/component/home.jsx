import React from "react";
import Todo_list from "./toDoList";
import Task from "./task";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Todo_list />
		</div>
	);
};

export default Home;
