import { createBrowserRouter } from "react-router-dom"
import Root from "../components/root"
import Students from "../pages/students"
import Employees from "../pages/employees"
import Home from "../pages/home"
import content from "../_content"

function useAppRouting() {
	const [students, employees, cooperation, news] = content.root.nav
	return createBrowserRouter([
		{
			path: '/',
			Component: Root,
			children: [
				{
					path: '/',
					element: <Home name={'Home'} />
				},
				{
					path: students.destination,
					element: <Students />
				},
				{
					path: employees.destination,
					element: <Employees name={employees.name} />
				},
				{
					path: cooperation.destination,
					element: <p />
				},
				{
					path: news.destination,
					element: <p />
				}
			]
		}
	])
}

export default useAppRouting