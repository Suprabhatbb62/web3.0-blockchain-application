import { Welcome } from "../components/";
import { Transactions } from "../components/";
import LatestTransactions from "../components/LatestTransactions";
function Home() {
    return (
        <div >
            {/* <div className="gradient-bg-welcome"> */}

                {<Welcome />}
            {/* </div> */}
            {/* {<Transactions />} */}
            <LatestTransactions/>
            {/* {<Footer />} */}
        </div>
    )
}
export default Home;