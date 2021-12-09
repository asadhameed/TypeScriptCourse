import { SorterAbs } from "./SorterAbstract";
class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}
export class LinkListAbs extends SorterAbs {
  head: Node | null = null;
  // length: number = 0;
  add(data: number): void {
    const newNode = new Node(data);
    //  this.length++;
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds ");
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) return false;
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) return;
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  printData(): void {
    if (!this.head) {
      console.log("No data present");
    }

    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
