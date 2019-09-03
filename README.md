# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running looks like:

![truffle test](images/ftc_product_overview.png)
![truffle test](images/ftc_farm_details.png)
![truffle test](images/ftc_product_details.png)
![truffle test](images/ftc_transaction_history.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment section below for deployment to Rinkeby.

### Prerequisites

Install ganache-cli, Truffle and enabled MetaMask extension in your browser.

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```
## Running DApp

1. In Metamask import account[0] provided by Ganache
2. Enter accounts 1-4 for farmer id, distributor id, retailer id, and consumer id into the first section of the form. Click Add Roles to assign the addresses to roles.
3. Import accounts 1-4  into Metamask
4. Change to the account for the proper role in order to successfully execute functions

## Rinkeby deployment

1. Login/create infura account to obtain Rinkeby endpoint
2. Run "ganache-cli" which generates test accounts and also mnemonic; can also use a previous existing mnemonic with command "ganache-cli -m "<mnemonic>""
3. Update the truffle-config.js file to include the Rinkeby network:
        var HDWalletProvider = require("truffle-hdwallet-provider");
        var mnemonic = <obtain from ganache>;
        module.exports = {
          networks: {
            rinkeby: {
              provider: function() {
               return new HDWalletProvider(mnemonic, "<infura rinkeby endpoint>");
              },
              network_id: 4,
              gas: 4500000,
            }
          };
        };
4. Delete the build folder; it can cause problems with the deployment
5. truffle compile
6. truffle migrate --network rinkeby --reset
7. Get account[0] from ganache and import the private key into Metamask. Etherscan of deployment:
    https://rinkeby.etherscan.io/address/0x385aaaf5f9e8c5aedf57e89a02eb57b2455edacd

## Built With

* [Node v10.16.0] - a JavaScript runtime for building server-side or desktop applications
* [Web 3 v1.2.1] - a collection of libraries which allow you to interact with a local or remote ethereum node, using a HTTP or IPC connection
* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework v5.0.33](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
