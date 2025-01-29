import Tree from "../../Tree/UI/tree";
import TreesBusiness from "../Business/TreesBusiness";

const Trees = () => {
  const { positionTrees } = TreesBusiness();
  return positionTrees.map((position, index) => {
    return <Tree position={position} key={index} />;
  });
};

export default Trees;
