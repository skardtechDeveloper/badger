
import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Badger | Home</title>
            </Head>
            <div className="flex flex-col gap-2">
                Home Page
                {/* {articles.map((article) > (
                    <div className="p-2 bg-white" key={article.id}>
                        <h1 className="text-sm">{article.attributes.title}</h1>
                    </div>
                ))} */}
            </div>
        </>
    )
}

export default Home;

// export async function getStaticProps() {
//     const response = await axios.get("/api/v1/articles");
//     const articles = response.data.data;

//     return {
//         props: {
//             articles
//         },
//     }
// }

Home.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>

    )
}