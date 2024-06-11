import { tut1, tut2, tut3, tut4, tut5, tut6, tut7 } from "../../images/images.js";

function Tuitorial() {
    return (
        <div className="tut-container">
            <h1 className="text-4xl mb-[50px]">Quick Overview</h1>
            <p className="w-[90%] lg:w-[60%] border-b-2 pb-4 mb-7">
                Web 3.0 is a possible future version of the internet based on public
                blockchains, a record-keeping system best known for facilitating
                cryptocurrency transactions. The attractiveness of Web 3.0 is that it is
                decentralized. Our developed project Web 3.0 Application On Ethereum
                Blockchain has the following results.
            </p>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    1. Following figure shows the basic homepage of the web application.
                </p>
                <img className="my-10" src={tut1} alt="Tutorial 1" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    2. After clicking on Connect Wallet button the MetaMask pairing is started.
                    By which we can interact with the project with a wallet.
                </p>
                <img className="my-10" src={tut2} alt="Tutorial 2" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    3. After wallet is connected the wallet address is shown. And now
                    we can send Ethereum crypto by inputting receiver’s address.
                </p>
                <img className="my-10" src={tut3} alt="Tutorial 3" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    4. Track all latest transaction records. With amount transferred and
                    timestamp also available.
                </p>
                <img className="my-10" src={tut4} alt="Tutorial 4" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    5. Whenever we send a transaction request, our application sends a request
                    to the connected wallet. When a user agrees to the request, the transaction
                    is processed.
                </p>
                <img className="my-10" src={tut5} alt="Tutorial 5" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    6. All transaction details are stored in the form of blocks within the blockchain.
                    For every transaction, a unique hash number is generated.
                </p>
                <img className="my-10" src={tut6} alt="Tutorial 6" height="700px" width="800px" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="w-[90%] lg:w-[60%]">
                    7. Here is the corresponding blog for our main project web 3.0 application. The
                    blog contains all cryptocurrency-related queries. Gather knowledge about
                    crypto, explore crypto token prices within this single platform. The blog is
                    deployed to finance123.com.
                </p>
                <img className="my-10" src={tut7} alt="Tutorial 7" height="700px" width="800px" />
            </div>
        </div>
    );
}

export default Tuitorial;
