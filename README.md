# vKYCchain


Video KYC (Know Your Customer)
KYC process is initiated when a customer intends to work with a financial institution, for example, a bank.

Done via a weblink and involves:  

- digital documnets like PAN card 
- Aadhaar card 
- selfie pictures 
- location(GPS and IP address) 
- video call with employee of institution to verify all data and documents  


Disadvantage:  
Applicants ends upd doing vKYC for each institutions separately  


vKYCchain  

A private blockchain based solution were all member institutions can validate the applicants and share data for their KYC needs.  


Advantages of vKYCchain  

- any institute who wish to join in can become part of vKYCchain after completing the formalities agreed upon  
- this platform can act as a source of truth between applicans and the institutes  
- avoids the need for retaking KYCs with each institutes from the applicant side  
- a mutual trust is developed among the institutions based on the shared data  
- faster financial operations  





## vKYCchain Architecture  

## Development

- Hyperledger Fabric is a blockchain framework that runs smart contracts called chaincode, which are written in Go.  
- You can create a private network with Hyperledger Fabric, limiting the peers that can connect to and participate in the network.


5 Layer Fabric Application Stack

- Prerequisite software:	the base layer needed to run the software, for example, Docker.  
- Fabric and Fabric samples: 	the Fabric executables to run a Fabric network along with sample code.  
- Contract APIs: 		to develop smart contracts executed on a Fabric Network.  
- Application APIs: 		to develop your blockchain application.  
- The Application: 		blockchain application will use Application SDKs to call smart contracts running on a Fabric network.  


https://github.com/hyperledger/fabric-samples  


Platform-specific Hyperledger Fabric CLI tool binaries and config files into the fabric-samples to interact with the test network.  

- configtxgen  
- configtxlator  
- cryptogen  
- discover  
- idemixgen  
- orderer  
- osnadmin  
- peer  
- fabric-ca-client  
- fabric-ca-server  



https://hyperledger-fabric.readthedocs.io/en/latest/sdk_chaincode.html  


Fabric Contract APIs

 APIs for developing smart contracts (chaincode)  

- [Go contract API](https://github.com/hyperledger/fabric-contract-api-go) and [documentation](https://pkg.go.dev/github.com/hyperledger/fabric-contract-api-go).  
- [Node.js contract API](https://github.com/hyperledger/fabric-chaincode-node) and [documentation](https://hyperledger.github.io/fabric-chaincode-node/).  
- [Java contract API](https://github.com/hyperledger/fabric-chaincode-java) and [documentation](https://hyperledger.github.io/fabric-chaincode-java/).  


Fabric Application APIs  

- [Fabric Gateway client API](https://github.com/hyperledger/fabric-gateway) and [documentation](https://hyperledger.github.io/fabric-gateway/).  

- [Node.js SDK](https://github.com/hyperledger/fabric-sdk-node) and [documentation](https://hyperledger.github.io/fabric-sdk-node/).  
- [Java SDK](https://github.com/hyperledger/fabric-gateway-java) and [documentation](https://hyperledger.github.io/fabric-gateway-java/).  
- [Go SDK](https://github.com/hyperledger/fabric-sdk-go) and [documentation](https://pkg.go.dev/github.com/hyperledger/fabric-sdk-go/).  





[Key Concepts](https://hyperledger-fabric.readthedocs.io/en/latest/key_concepts.html)  

    Introduction  
    Hyperledger Fabric Model  
    How Fabric networks are structured  
    Identity  
    Membership Service Provider (MSP)  
    Policies  
    Peers  
    Ledger  
    The Ordering Service  
    Smart Contracts and Chaincode  
    Fabric chaincode lifecycle  
    Private data  
    Channel capabilities  
    Security Model  
    Use Cases  


## Operations  

#### Deploying a test network  

1. It includes two peer organizations and an ordering organization.
2. For simplicity, a single node Raft ordering service is configured.
3. To reduce complexity, a TLS Certificate Authority (CA) is not deployed. All certificates are issued by the root CAs.
4. The sample network deploys a Fabric network with Docker Compose. 
   Because the nodes are isolated within a Docker Compose network, 
   the test network is not configured to connect to other running Fabric nodes



#### Deploying a production network

1. Decide on your network configuration  
2. Set up a cluster for your resources  
3. Set up your CAs  
4. Use the CA to create identities and MSPs  
5. Deploy peers and ordering nodes  
        Creating a peer  
        Creating an ordering node  


1. Create the Network and First Member  
2. Create an Endpoint  
3. Create a Peer Node  
4. Set Up a Client  
5. Enroll the Member Admin  
6. Create a Channel  
7. Run Chaincode  
8. Invite a Member and Create a Multi-Member Channel  





## Links  

[https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html)  
[https://www.hyperledger.org/use/fabric](https://www.hyperledger.org/use/fabric)  
[https://hyperledger-fabric.readthedocs.io/en/release-2.2/deployment_guide_overview.html](https://hyperledger-fabric.readthedocs.io/en/release-2.2/deployment_guide_overview.html)  
[https://www.hyperledger.org/learn/case-studies](https://www.hyperledger.org/learn/case-studies)  
[https://hyperledger-fabric.readthedocs.io/en/release-2.2/test_network.html](https://hyperledger-fabric.readthedocs.io/en/release-2.2/test_network.html)  

[https://docs.aws.amazon.com/blockchain-templates/latest/developerguide/blockchain-template-getting-started-prerequisites.html](https://docs.aws.amazon.com/blockchain-templates/latest/developerguide/blockchain-template-getting-started-prerequisites.html)  
[https://docs.aws.amazon.com/blockchain-templates/latest/developerguide/blockchain-templates-hyperledger.html](https://docs.aws.amazon.com/blockchain-templates/latest/developerguide/blockchain-templates-hyperledger.html)  
[Deploying Hyperledger Fabric Blockchain Template On AWS Tutorial](https://youtu.be/bDm1agCBR4c)  
[https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-get-started-tutorial.html](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-get-started-tutorial.html)  


[https://github.com/hyperledger/fabric-samples](https://github.com/hyperledger/fabric-samples)  
[https://hyperledger-fabric.readthedocs.io/en/latest/deploy_chaincode.html](https://hyperledger-fabric.readthedocs.io/en/latest/deploy_chaincode.html)  
[https://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html](https://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html)  
