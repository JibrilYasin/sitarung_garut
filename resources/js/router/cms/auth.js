import WrapAuth from "../../components/layouts/cms/WrapAuth"

const LoginPage = () => import('../../components/cms/auth/Login')
const ForgotPage = () => import('../../components/cms/auth/Forgot')
const OTPPage = () => import('../../components/cms/auth/OTP')
const ResetPage = () => import('../../components/cms/auth/Reset')

export default [
	{
	    path: "/auth",
	    component: WrapAuth,
	    children: [
	        {
	            name: "LoginPage",
	            path: "login",
	            component: LoginPage,
	            props: {
	                title: "Content Managenement System ( Halaman Login )",
	            },
	        },
					{
	            name: "ForgotPage",
	            path: "forgot",
	            component: ForgotPage,
	            props: {
	                title: "Content Managenement System ( Halaman Lupa Password )",
	            },
	        },
					{
	            name: "OTPPage",
	            path: "otp",
	            component: OTPPage,
	            props: {
	                title: "Content Managenement System ( Halaman OTP )",
	            },
	        },
					{
	            name: "ResetPage",
	            path: "reset",
	            component: ResetPage,
	            props: {
	                title: "Content Managenement System ( Halaman Reset Password )",
	            },
	        },
	    ],
	},
]
