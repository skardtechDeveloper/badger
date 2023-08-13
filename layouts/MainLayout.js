import Nav from "@/components/Nav"
import Footer from "@/components/Footer";


const MainLayout = ({ children }) => {
    return (
        <div className="antialiased bg-blue-50">
            <div className="flex justify-center w-full mx-auto">
                <Nav />
            </div>
            <div className="flex justify-center w-full mx-auto mt-6 sm:mt-0 sm:py-12 px-8">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;