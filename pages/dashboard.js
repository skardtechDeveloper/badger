import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";


const Dashboard = () => {
    return (
        <div>
            Dashboard Page
        </div>

    )
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>

    )
}