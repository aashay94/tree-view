// import React from 'react';
// import InfiniteTree from 'react-infinite-tree';
// import TreeNode from './components/TreeNode';
// import Toggler from './components/Toggler';
// export default (props) => (
//     <InfiniteTree
//         width="100%"
//         height={400}
//         rowHeight={30}
//         data={props.data}
//     >gdhgfhgfhgfjgfh
    
//     {({ node, tree }) => {
//         // Determine the toggle state
//         let toggleState = '';
//         const hasChildren = node.hasChildren();
//         if ((!hasChildren && node.loadOnDemand) || (hasChildren && !node.state.open)) {
//             toggleState = 'closed';
//         }
//         if (hasChildren && node.state.open) {
//             toggleState = 'opened';
//         }
        
//         return (
//             <TreeNode
//                 selected={node.state.selected}
//                 depth={node.state.depth}
//                 onClick={event => {
//                     tree.selectNode(node);
//                 }}
//             >
//                 <Toggler
//                     state={toggleState}
//                     onClick={() => {
//                         if (toggleState === 'closed') {
//                             tree.openNode(node);
//                         } else if (toggleState === 'opened') {
//                             tree.closeNode(node);
//                         }
//                     }}
//                 />
//                 <span>{node.name}</span>
//             </TreeNode>
//         );
//     }}
//     </InfiniteTree>
// );
