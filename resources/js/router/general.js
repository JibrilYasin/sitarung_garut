import Wrap from "../components/layouts/front/WrapMain"

const MainPage = () => import('../components/front/Main')

export default [
	{
	    path: "/",
	    component: Wrap,
	    children: [
	        {
	            name: "MainPage",
	            path: "",
	            component: MainPage,
	            props: {
	                title: "Aplikasi Sitarung",
									active: "MainPage",
	            },
	        },
	    ],
	},
]
