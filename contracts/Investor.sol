// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

import "./ContractOwner.sol";

contract Investor {
    address contractOwner; // address of ContractOwner contract
    ContractOwner contractOwnerObj; // object of ContractOwner contract

    struct investor_info {
        string name;
        string photo;
        string occupation;
        address account;
    }

    investor_info [] investors;
 
    constructor(address _contractOwner) {
        contractOwner = _contractOwner;
        contractOwnerObj = ContractOwner(_contractOwner);
    }

    modifier is_investor() {
        require( is_investor_exits() == true, "you're not register as investor." );
        _;
    }

    function register_investor(string calldata _name, string calldata _photo, string calldata _occupation, address _account ) public {
        investor_info memory investor;
        investor.name = _name;
        investor.photo = _photo;
        investor.occupation = _occupation;
        investor.account = _account;
        investors.push(investor);
    }

    function getInvestorByAddress(address _account) public view returns(investor_info memory tempInvestor) {
        for(uint8 i=0; i<investors.length; i++) {
            if(investors[i].account == _account) {
                tempInvestor = investors[i];
            }
        }
    }

    function getInvestors() public view returns(investor_info [] memory) {
        return investors;
    }


    // make sure investor is registerd
    function investInIdea(string calldata _code, uint _amount, address _account) public is_investor {
        address account = _account;
        contractOwnerObj.receiveIdeaDonations(_code, _amount, account);
    }

    function is_investor_exits() public view returns(bool investor) {
        address _account = msg.sender;
        for(uint8 i=0; i<investors.length; i++) {
            if( investors[i].account == _account ) {
                return true;
            }
        }
    }

}