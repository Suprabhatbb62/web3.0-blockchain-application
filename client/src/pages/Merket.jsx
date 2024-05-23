import React, { useState, useEffect } from "react";

function Market() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(`https://api.wazirx.com/sapi/v1/tickers/24hr`);
            const resdata = await res.json();
            console.log(resdata);
            setData(resdata);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="text-white">
                <h1 className="text-2xl text-center mt-[30px] mb-[60px]">All Cryptocurrencies Real-Time Data</h1>
                <div className="m-[7px] text-center " style={{  padding: "7px", display: "flex", justifyContent:"center", flexDirection: "row", flexWrap: "wrap" }}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        data.slice(0, 557).map((currval, index) => (
                            <div key={index} style={{ margin: "5px", border: "2px solid #fff", borderRadius: "8px", width: "270px", height: "230px" }}>
                                <p className="mt-5  text-xl mb-10">Name: {`${currval.baseAsset}`.toUpperCase()}</p>
                                <p>Current Price: {currval.lastPrice} INR</p>
                                <p>Highest Price 24h: {currval.highPrice} INR</p>
                                <p>Lowest Price 24h: {currval.lowPrice} INR</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Market;
