function Tuitorial() {
    return (
        <>
            <div className="tut-container">
                <h1 className="text-4xl mb-[50px]">Quick Overview</h1>
                <p className=" w-[90%] lg:w-[60%] border-b-2 pb-4 mb-7">Web 3.0 is a possible future version of the internet based on public
                    blockchains, a record-keeping system best known for facilitating
                    cryptocurrency transactions. The attractiveness of Web 3.0 is that it is
                    decentralized. Our developed project Web 3.0 Application On Ethereum
                    Blockchain have the following results.</p>
                    <br/>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">1. Following figure shows the basic homepage of the web
                        application.</p>
                    <img className="my-10" src="/images/tut1.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">2. After click on Connect Wallet button the Metamask[3] pairing is
                        started. By which we can interact the project with a wallet.</p>
                    <img className="my-10" src="/images/tut2.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">3. After wallet is connected the wallet address is shown. And now
                        we can send Ethereum crypto by inputting receiver’s address.</p>
                    <img className="my-10" src="/images/tut3.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">4. Track all latest transaction records. With amount
                        transferred and timestamp also available.</p>
                    <img className="my-10" src="/images/tut4.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">5. Whenever we send a transaction request we out
                        application, it sends a request to connected wallet. When a user
                        agree the request the transaction processed.</p>
                    <img className="my-10" src="/images/tut5.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">6. All transaction details are stored in a form of block within
                        blockchain. For every transaction a unique hash number is
                        generated.</p>
                    <img className="my-10" src="/images/tut6.png" height="700px" width="800px" />
                </div>
                <div className=" flex  justify-center items-center flex-col">
                    <p className=" w-[90%] lg:w-[60%]">7. Here is the corresponding blog for our main project web 3.0
                        application. The blog contains all cryptocurrency related quires.
                        Gather knowledge about crypto, explore crypto token prices
                        within this single platform. The blog deployed to finance123.com.</p>
                    <img className="my-10" src="/images/tut7.png" height="700px" width="800px" />
                </div>
            </div>
        </>
    )
}
export default Tuitorial;