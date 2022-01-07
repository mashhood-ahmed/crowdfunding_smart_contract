// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

import "./ContractOwner.sol";

contract Ideator {
    address contractOwner; // address of ContractOwner contract
    ContractOwner contractOwnerObj; // object of ContractOwner contract

    struct ideator_info {
        string name;
        string photo;
        string education;
        address account;
    }

    ideator_info [] ideators; // contains multiple ideators


    constructor(address _contractOwner) {
        contractOwner = _contractOwner;
        contractOwnerObj = ContractOwner(_contractOwner);
    }

    modifier is_ideator() {
        require( is_ideator_exists() == true, "you're not register! kindly register first." );
        _;
    }

    function register_ideator(string calldata _name, string calldata _photo, string calldata _education, address _account ) public {
        ideator_info memory ideator;
        ideator.name = _name;
        ideator.photo = _photo;
        ideator.education = _education;
        ideator.account = _account;
        ideators.push(ideator);
    }

    function postIdea(string calldata _code, string calldata _title, string calldata _description ) public is_ideator {
        address idea_owner = msg.sender;
        contractOwnerObj.saveIdea(_code, _title, _description, idea_owner);
    }

    function getIdeatorByAddress(address _account) public view returns(ideator_info memory tempIdeator) {
        for(uint8 i=0; i<ideators.length; i++) {
            if(ideators[i].account == _account) {
                tempIdeator = ideators[i];
                return tempIdeator;
            }
        }
    }

    function is_ideator_exists() private view returns(bool tempFlag) {
        address ideator = msg.sender;
        for(uint8 i=0; i<ideators.length; i++) {
            if(ideators[i].account == ideator) {
                return true;
            }
        }
    }

}