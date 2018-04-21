pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;


    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {

    // a struct here is a struct definition
    // it doesn't create an instance
    // defines the idea of a request, can make as many as we want
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }


    // no problem if people want to find out address of manager
    // want people to see who manager is
    // so make public
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    // an array of requests
    Request[] public requests;

    // only want to manager to be able to create a requests
    // lock down/ restrict access to create request function
    // so need to create function modifier
    // will use modifier in more than one location
    // place all modifiers above the constructor function
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // constructor function
    // pass in minimumContribution amount
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    // payable is what makes function able
    // to accept some amount of money
    function contribute() public payable {
        // msg.value is amount in wei
        // require statement is if they don't contribute minimumContribution
        // then it throws them out of the function
        require(msg.value > minimumContribution);
        // adds sender to the approvers mapping
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        // storage makes variable point at same location/ data structure
        // don't have to initialize the mapping because it's a reference type
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        // alternative syntax
        // Request(description, value, recipient, false);

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        // if this personal already voted we want to kick out of function call
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {

        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);

        request.complete = true;
    }

    function getSummary() public view returns(
      uint, uint, uint, uint, address
      ) {
      return (
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
        );
    }

    function getRequestsCount() public view returns (uint) {
      return requests.length;
    }

}
