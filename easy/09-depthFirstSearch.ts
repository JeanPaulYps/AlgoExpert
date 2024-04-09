// V2

// export class Node {
//   name: string;
//   children: Node[];

//   constructor(name: string) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name: string) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array: string[]) {
//     const depthSearch = (node: Node) => {
//       if (!node) {
//         return;
//       }
//       array.push(node.name);
//       for (const childrenNode of node.children) {
//         depthSearch(childrenNode);
//       }
//     };
//     depthSearch(this);
//     return array;
//   }
// }


// V2
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    const depthSearch = (node: Node) => {
      array.push(node.name);
      node.children.forEach((child) => depthSearch(child));
    };
    depthSearch(this);
    return array;
  }
}
