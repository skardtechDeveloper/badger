import MainLayout from "@/layouts/MainLayout";


const About = () => {
    return (
        <div>About Page</div>
    )
}

export default About;

About.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>

    )
}