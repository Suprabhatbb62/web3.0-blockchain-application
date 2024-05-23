function About() {
    return (
        <>
            <div className="text-white mt-[40px] px-10 lg:px-52 text-center">
                {/* <h1 className="text-3xl mb-10">Get to Know Us</h1> */}
                <div className="flex items-center justify-center mb-[50px] ">
                    <img src="/images/logo.png" className="w-[250px]" />
                </div>
                <p>We present Web 3.0 Application On Ethereum Blockchain that is a platform
                    for cryptocurrency transactions, learning cryptocurrency, exploring crypto
                    tokens. This blockchain application can allows users to send transactions
                    through Ethereum blockchain. User can send their Ethereum or other assets
                    through one address to another address. The transferable Ethereum crypto
                    that stores in Metamask wallet are send to another wallet address and the
                    whole process and transactions goes through Ethereum blockchain.
                </p>
                <br />
                <p>
                    Whenever we send a transaction request, blockchain stores information
                    electronically in digital format. A blockchain collects information together in
                    groups, known as blocks, that hold sets of information. Blocks have certain
                    storage capacities and, when filled, are closed and linked to the previously
                    filled block, forming a chain of data known as the blockchain. All new
                    information that follows that freshly added block is compiled into a newly
                    formed block that will then also be added to the chain once filled. The
                    innovation with a blockchain is that it guarantees the fidelity and security of a
                    record of data and generates trust without the need for a trusted third party.
                </p>
                <br />
                <p className="mb-[70px]">
                    A blockchain is a growing list of records, called blocks, that are securely linked
                    together using cryptography. Each block contains a cryptographic hash of the
                    previous block, a timestamp, and transaction data. The timestamp proves that
                    the transaction data existed when the block was published to get into its hash.
                    As blocks each contain information about the block previous to it, they form a
                    chain, with each additional block reinforcing the ones before it. Therefore,
                    blockchains are resistant to modification of their data because once recorded,
                    the data in any given block cannot be altered retroactively without altering all
                    subsequent blocks. For obvious reasons, Blockchain technology's future scope
                    majorly lies in the field of Cybersecurity. Although the Blockchain ledger is
                    open and distributed, the data is secure and verified. The encryption is done
                    through cryptography to eliminate vulnerabilities such as unauthorized data
                    tampering.

                </p>

            </div>
        </>
    );
}
export default About;