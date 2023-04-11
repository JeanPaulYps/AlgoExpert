// This is an input class. Do not edit.
// export class LinkedList {
//   value: number;
//   next: LinkedList | null;

//   constructor(value: number) {
//     this.value = value;
//     this.next = null;
//   }
// }

// export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
//   let node: LinkedList | null = linkedList;
//   let actualReference = linkedList;
//   let actualValue = linkedList.value;
//   while (node) {
//     if (node.value !== actualValue) {
//       actualReference.next = node;
//       actualReference = node;
//       actualValue = node.value;
//     }
//     node = node.next;
//   }
//   actualReference.next = null;
//   return linkedList;
// }

/* -------------------------------------------------------------------------- */
/*                              Version 2                                     */
/* -------------------------------------------------------------------------- */

// This is an input class. Do not edit.
// export class LinkedList {
//   value: number;
//   next: LinkedList | null;

//   constructor(value: number) {
//     this.value = value;
//     this.next = null;
//   }
// }

// export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
//   let actualReference: LinkedList | null = linkedList;
//   let next = linkedList.next;
//   while (actualReference) {
//     if (actualReference.value !== next?.value) {
//       actualReference.next = next;
//       actualReference = next;
//     }
//     next = next?.next || null;
//   }
//   return linkedList;
// }

/* -------------------------------------------------------------------------- */
/*                              Version 3                                     */
/* -------------------------------------------------------------------------- */
// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let actualReference: LinkedList | null = linkedList;
  while (actualReference) {
    if (actualReference === actualReference.next) {
        actualReference.next = actualReference.next.next;
    } else {
        actualReference = actualReference.next;
    }
  }
  return linkedList;
}
