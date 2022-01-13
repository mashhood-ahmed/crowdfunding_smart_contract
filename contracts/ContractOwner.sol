// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

import "./Ideator.sol";
import "./Investor.sol";

contract ContractOwner {

    Ideator ideatorObj;
    Investor investorObj;   

    struct idea_info {
        string code;
        string title;
        string description;
        uint8 amount;
        address ideaOwner;
    }

    idea_info [] ideas_arr; // contains multiple ideas
    mapping(string => address[]) idea_investors;
    mapping(address => string[]) investors_idea; 

    constructor() {
        ideatorObj = new Ideator( address(this) );
        investorObj = new Investor( address(this) );
    }

    function saveIdea(string calldata _code, string calldata _title, string calldata _description, address _account) public {
        idea_info memory idea;
        idea.code = _code;
        idea.title = _title;
        idea.description = _description;
        idea.ideaOwner = _account;
        ideas_arr.push(idea);
    }

    function getIdeasByIdeatorAddress(address _account) public view returns(idea_info memory tempIdea) {
         for(uint8 i=0; i<ideas_arr.length; i++) {
             if( ideas_arr[i].ideaOwner == _account ) {
                 return ideas_arr[i];
             }
         }
    }

    function getIdeas() public view returns(idea_info [] memory) {
        return ideas_arr;
    }

    function getIdeaByCode(string calldata _code) public view returns(idea_info memory tempIdea) {
        for(uint8 i=0; i<ideas_arr.length; i++) {
            if( keccak256(bytes(ideas_arr[i].code)) == keccak256(bytes(_code))) {
                return ideas_arr[i];
            }
        }
    }

    // call from investor contract
    function receiveIdeaDonations(string calldata _code, uint8 _amount, address _account) public {
        for(uint8 i=0; i<ideas_arr.length; i++) {
            if(keccak256(bytes(ideas_arr[i].code)) == keccak256(bytes(_code))) {
                ideas_arr[i].amount = ideas_arr[i].amount + _amount;
            }
        }
        idea_investors[_code].push(_account);
        investors_idea[_account].push(_code);
    }
    
    // Get All Idea Codes
    function getIdeaCodes() public view returns(string [] memory codes) {
        codes = new string[](ideas_arr.length);
        for(uint8 i=0; i<ideas_arr.length; i++) {
            codes[i] = ideas_arr[i].code;
        }
        return codes;
    }

    function getIdeaOnInvestor(address _account) public view returns(string [] memory ideaCodes) {
        return investors_idea[_account];
    }

    function getInvestorsOnIdeaCode(string calldata _code) public view returns(address[] memory ideaInvestors) {
        return idea_investors[_code];
    }

    function getIdeatorContractAddress() public view returns(address ideatorAddr) {
        ideatorAddr = address(ideatorObj);
    }

    function getInvestorContractAddress() public view returns(address investorAddr) {
        investorAddr = address(investorObj);
    }

}