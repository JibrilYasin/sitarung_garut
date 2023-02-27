import Wrap from "../components/layouts/front/WrapMain"

const ActivationPage = () => import('../components/front/auth/Activation')

export default [
	{
	    path: "/auth",
	    component: Wrap,
	    children: [
	        {
	            name: "ActivationPage",
	            path: "activation/:token?",
	            component: ActivationPage,
	            props: {
	                title: "Aktifasi Akun Aplikasi Sitarung",
									active: "ActivationPage",
	            },
	        },
	    ],
	},
]
