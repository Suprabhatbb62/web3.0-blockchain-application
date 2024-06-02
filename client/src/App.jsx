import HomeRouter from "./router/homerouter";
import LatestTransactions from "./components/LatestTransactions";
const App = () => (
  <>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <HomeRouter />
      </div>
    </div>

    {/* <LatestTransactions className="text-white" /> */}

  </>
);

export default App;
