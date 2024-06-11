import { useState, useEffect, useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import { TransactionContext } from "../context/TransactionContext";
function LatestTransactions() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currentAccount } = useContext(TransactionContext);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(`https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0xe648e6238d8f0F1A612662d6590c2b5Bf73d247B&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=E7EMPJVH625CRKUBMIDZ2UU6Q8ZUYPIHXY`);
            const resdata = await res.json();
            console.log("data", resdata.result);
            setData(resdata.result);
            setLoading(false);
        };

        fetchData();
    }, []);
    console.log(data);

    return (
        <>
            <div className="flex w-full justify-center items-center 2xl:px-20 ">
                <div className="flex flex-col md:p-12 py-12 px-4">
                    {currentAccount ? (
                        <h3 className="text-white text-3xl text-center my-2">
                            Latest Transactions
                        </h3>
                    ) : (
                        <h3 className="text-white text-3xl text-center my-2">
                            Connect your account to see the latest transactions
                        </h3>
                    )}
                    <div className="flex flex-wrap justify-center items-center mt-10">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            data.sort((a, b) => Number(b.timeStamp) - Number(a.timeStamp))  // Sort by timeStamp
                                .slice(0, data.length)
                                .map((currval, index) => (
                                    <div key={index}>
                                        {/* <h1>{(currval.value / (10 ** 18)).toFixed(5)} ETH</h1> */}
                                        <div className="bg-[#181918] m-4 flex flex-1
                    2xl:min-w-[450px]
                    2xl:max-w-[500px]
                    sm:min-w-[270px]
                    sm:max-w-[300px]
                    min-w-full
                    flex-col p-3 rounded-md hover:shadow-2xl
                ">
                                            <div className="flex flex-col items-center w-full mt-3">
                                                <div className="w-full mb-6 p-2">
                                                    <a href={`https://sepolia.etherscan.io/address/${currval.from}`} target="_blank" rel="noreferrer">
                                                        <p className="text-white text-base">From: {shortenAddress(currval.from)}</p>
                                                    </a>
                                                    <a href={`https://sepolia.etherscan.io/address/${currval.to}`} target="_blank" rel="noreferrer">
                                                        <p className="text-white text-base">To: {shortenAddress(currval.to)}</p>
                                                    </a>
                                                    <a>
                                                        <p className="text-white text-base">
                                                            Time: {new Date(Number(currval.timeStamp) * 1000).toLocaleString('en-US', {
                                                                year: 'numeric',
                                                                month: '2-digit',
                                                                day: '2-digit',
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                second: '2-digit',
                                                                hour12: true,
                                                            })}
                                                        </p>
                                                    </a>
                                                    <p className="text-white text-base">Amount: {(currval.value / (10 ** 18)).toFixed(5)} ETH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>

            </div>


        </>
    )
}
export default LatestTransactions;