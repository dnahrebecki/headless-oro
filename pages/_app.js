import "../styles/global.css"
import Layout from '../components/Layout'
import {SolutionSwitcher} from "../contexts/solution";

function MyApp({ Component, pageProps }) {
    return (
        <SolutionSwitcher>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SolutionSwitcher>
    )
}

export default MyApp