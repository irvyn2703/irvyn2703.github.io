import Tree from "../../Tree/UI/tree";
import TreesBusiness from "../Business/TreesBusiness";

const Trees = () => {
  const { positionTrees } = TreesBusiness();
  return positionTrees.map((position, index) => {
    console.log(position);
    return <Tree position={position} key={index} />;
  });
};

export default Trees;
