# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running looks like:

![truffle test](images/1_assign_roles.png)
![truffle test](images/2_fetch_data.png)
![truffle test](images/3_farm.png)
![truffle test](images/4_product.png)

## UML Documentation

See UML.pdf in the root directory for UML designs.

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

All 8 tests should pass.

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

#Rinkeby deployment transactions and contract addresses

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ab802


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x809407f8909c30fce98c3a3d5a6c693ee0b89f74fa15d25202273f36be5bca04
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 4
   > contract address:    0xcABdbbEd92A33262B9833896714b88626790E55B
   > block number:        5033492
   > block timestamp:     1567641076
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.550205748
   > gas used:            277398
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00554796 ETH

- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00554796 ETH

2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x99e3606bda01db2ac544675304221d8c42bca5b69eb982b266f11c3a39aef2fb
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 12
   > contract address:    0x182B18989c8C228C6Ca40e582Ccf9629F6Aae513
   > block number:        5033494
   > block timestamp:     1567641106
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.541612448
   > gas used:            387657
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775314 ETH

   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x9559e3c4c477f7b9948431862167ab897a2f554652b000833fc71506c8a8e376
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 12
   > contract address:    0xAc6701898e241080c06A8e5dCF1A91371C33424C
   > block number:        5033495
   > block timestamp:     1567641121
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.533860588
   > gas used:            387593
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775186 ETH

   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x597b7aa6d2e900c5638c16ca049866d102643ab417303180f7d312b52e8790d9
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 12
   > contract address:    0x8Ce1736e47e024975326219B624C5f55bb8FeD05
   > block number:        5033496
   > block timestamp:     1567641136
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.526104888
   > gas used:            387785
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0077557 ETH

   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0xf9de2275ba560d7c5359a8df0162cf48c50f57c38a2cc21b660d60a9ab7d0f50
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 8
   > contract address:    0xeAcFc89a54ea03B817Fcc7b22735C4a07E696d49
   > block number:        5033497
   > block timestamp:     1567641151
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.518351748
   > gas used:            387657
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775314 ETH

   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x79ec9f07715b6df65c7624da6ed1892148003b82c7e7b2365bf06ae28c801518
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 12
   > contract address:    0x7744a5fFB63751648CF7B99bD30BF36a6af79884
   > block number:        5033498
   > block timestamp:     1567641166
   > account:             0x385aAaF5F9E8c5aedF57E89A02EB57b2455edaCD
   > balance:             18.446396428
   > gas used:            3597766
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07195532 ETH

- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10296916 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.10851712 ETH

## Built With

* [Node v10.16.0] - a JavaScript runtime for building server-side or desktop applications
* [Web 3 v1.2.1] - a collection of libraries which allow you to interact with a local or remote ethereum node, using a HTTP or IPC connection
* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework v5.0.33](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* IPFS is not used in this project; It can be a future feature to store product images
