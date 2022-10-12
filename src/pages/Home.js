import Header from "../components/header/Header"
import AboutServices from "../components/home/about-services/AboutServices"
import Hero from "../components/home/hero/Hero"
import Quote from "../components/quote/Quote"
import Footer from "../components/footer/Footer"
import BackToTop from "../components/back-to-top/BackToTop"

export default function Home() {
    return (
        <>
            <Header pageSelected={"Home"} />
            <Hero />
            <BackToTop />
            <AboutServices />
            <Quote />
            <Footer />
        </>
    )
}
