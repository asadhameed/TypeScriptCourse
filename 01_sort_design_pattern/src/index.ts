import { BadLogicSorter } from "./BadLogic";
import { Sorter } from "./not_abstract/Sorter";
import { NumbersCollection } from "./not_abstract/NumbersCollection";
import { StringCollection } from "./not_abstract/StringCollections";
import { LinkList } from "./not_abstract/LinkList";

import { LinkListAbs } from "./abstract/LinkListAbs";
import { NumbersCollectionAbs } from "./abstract/NumbersCollectionAbs";
import { StringCollectionAbs } from "./abstract/StringCollectionsAbs";
/**************************************************************
 * Bad logic code
 *************************************************************/

const badLogicSorter = new BadLogicSorter([2, 34, 45, -2, 42, 534, 23, 65]);
badLogicSorter.sort();
console.log("Print the bad  logic number sort", badLogicSorter.collection);

const str = new BadLogicSorter("XabYaaa");
str.sort();
console.log("Print the bad  logic string sort", str.collection);

/*************************************************************************
 * Good logic make Interface and Sorter is not depend on data type
 ***************************************************************************/
console.log("----------------------------------------------->");

const number = new NumbersCollection([2, 34, 45, -2, 42, 534, 23, 65]);
const sorter = new Sorter(number);
sorter.sort();
console.log("Print the Good  logic number sort", number.data);

const strCollection = new StringCollection("XabYaaa");
const strSorter = new Sorter(strCollection);
strSorter.sort();
console.log("Print the Good  logic string sort", strCollection.data);

const linkList = new LinkList();
linkList.add(2);
linkList.add(34);
linkList.add(45);
linkList.add(-2);
linkList.add(42);
linkList.add(534);
linkList.add(23);
linkList.add(65);

const linkSorter = new Sorter(linkList);
linkSorter.sort();
console.log("Print the Good  logic Link List");
linkList.printData();

/*************************************************************************
 * More Better Option is that every collection have a sort method and
 * Sorter with Abstract class
 ***************************************************************************/
console.log("\n\n----------------------------------------------->\n");
console.log("             Abstract class method");
console.log("\n\n----------------------------------------------->");

const numberAbs = new NumbersCollectionAbs([2, 34, 45, -2, 42, 534, 23, 65]);
numberAbs.sort();
console.log("With Abstract number sort", numberAbs.data);

const strCollectionAbs = new StringCollectionAbs("XabYaaa");

strCollectionAbs.sort();
console.log("With Abstract string sort", strCollectionAbs.data);

const linkListAbs = new LinkListAbs();
linkListAbs.add(2);
linkListAbs.add(34);
linkListAbs.add(45);
linkListAbs.add(-2);
linkListAbs.add(42);
linkListAbs.add(534);
linkListAbs.add(23);
linkListAbs.add(65);

//const linkSorter = new Sorter(linkList);
linkListAbs.sort();
console.log("Print the Good  logic Link List");
linkListAbs.printData();
