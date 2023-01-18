import WrapMain from "../../components/layouts/cms/WrapMain"

const DashboardPage = () => import('../../components/cms/Dashboard')
const NotifikasiPage = () => import('../../components/cms/notifikasi/Data')
const PemohonPage = () => import('../../components/cms/pemohon/Data')
const InformasiStatusPage = () => import('../../components/cms/informasistatus/Data')
const PermohonanPage = () => import('../../components/cms/permohonan/Data')
const PermohonanDetailPage = () => import('../../components/cms/permohonan/Detail')

export default [
	{
	    path: "/admin",
	    component: WrapMain,
	    children: [
	        {
	            name: "DashboardPage",
	            path: "",
	            component: DashboardPage,
	            props: {
	              title: "Dashboard",
									//active: "MainPage",
	            },
	        },
					{
	            name: "NotifikasiPage",
	            path: "notifikasi",
	            component: NotifikasiPage,
	            props: {
	              title: "List Notifikasi",
									//active: "MainPage",
	            },
	        },
					{
	            name: "PemohonPage",
	            path: "pemohon",
	            component: PemohonPage,
	            props: {
	              title: "List Pemohon",
									//active: "MainPage",
	            },
	        },
					{
	            name: "InformasiStatusPage",
	            path: "informasistatus",
	            component: InformasiStatusPage,
	            props: {
	              title: "List Informasi Status",
									//active: "MainPage",
	            },
	        },
					{
	            name: "PermohonanPage",
	            path: "permohonan",
	            component: PermohonanPage,
	            props: {
	              title: "List Permohonan",
									//active: "MainPage",
	            },
	        },
					{
	            name: "PermohonanDetailPage",
	            path: "permohonan/detail/:id?",
	            component: PermohonanDetailPage,
	            props: {
	              title: "Detail Permohonan",
									//active: "MainPage",
	            },
	        },
	    ],
	},
]
