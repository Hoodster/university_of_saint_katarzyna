import { createBrowserRouter } from "react-router-dom"
import Root from "../components/root"
import Students from "../pages/students"
import Employees from "../pages/employees"
import Home from "../pages/home"
import content from "../_content"
import Business from "../pages/business"
import News from '../pages/news'
import ErrorBoundary from "../pages/error/error"

function useAppRouting() {
	const [students, employees, cooperation, news] = content.root.nav
	return createBrowserRouter([
		{
			path: '/',
			Component: Root,
			errorElement: <ErrorBoundary/>,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: students.destination,
					element: <Students />
				},
				{
					path: employees.destination,
					element: <Employees />
				},
				{
					path: cooperation.destination,
					element: <Business />
				},
				{
					path: news.destination,
					element: <News />
				}
			]
		}
	])
}

export default useAppRouting