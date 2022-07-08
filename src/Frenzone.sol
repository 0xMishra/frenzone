// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
contract Frenzone  is ReentrancyGuard {

  uint public postId;

  struct Post {
    address creator;
    uint id ;
    string caption;
    string imageHash;
    uint publishedTime; 
  }

  Post[] public posts;
  mapping(address => Post[]) public UserToPosts;

  function createPost(string memory _caption, string memory _postHash) external nonReentrant {
    posts.push(Post(msg.sender, postId, _caption,_postHash, block.timestamp));
    UserToPosts[msg.sender].push(Post(msg.sender, postId, _caption,_postHash, block.timestamp));
    postId++;
  }

  function getPostsByUser(address _user) external view returns(Post[] memory) {
    return UserToPosts[_user];
  }

  function getPostById(uint _postId) external view returns(Post memory) {
    return posts[_postId];
  }

  function getNumberOfPosts() external view returns(uint){
    return postId ; 
  }
  
}
