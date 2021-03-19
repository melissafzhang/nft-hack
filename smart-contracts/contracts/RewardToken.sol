pragma solidity ^0.6.12;
import "@openzeppelin/contracts/presets/ERC1155PresetMinterPauser.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseCreatorRewards is ERC1155PresetMinterPauser, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private itemId;

    constructor() public ERC1155PresetMinterPauser("https://creator.rewards/api/item/{id}.json") {
    }

    function createItem(address user, uint256 initialSupply) external onlyOwner {
        itemId.increment();
        uint256 newItemId = itemId.current();
        _mint(user, newItemId, initialSupply, "");
    }

    function mintBatchItems(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
}