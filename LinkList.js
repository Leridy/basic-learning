/**
 * @description 单项列表节点
 */
class Node {
	/**
	 * 链表节点
	 * @param { Number | String }value
	 * @param { Node } next
	 */
	constructor(value, next) {
		this.value = value;
		this.next = next;
	};
}

class BNode extends Node {
	/**
	 * 双向链表的节点
	 * @param { Number | String }value
	 * @param { BNode }prev
	 * @param { BNode }next
	 */
	constructor(value, prev, next) {
		super(value, next);
		this.prev = prev;
	}
}

class LinkList {
	/**
	 * 链表
	 * @param { Node } head
	 */
	constructor(head) {
		this.head = head || null;
		this.length = 0;
	}

	/**
	 * 添加节点
	 * @param { String | Number } value 节点值
	 * @param { Number } index 节点索引
	 */
	insertNode(value, index) {
		console.log(`将${value}插入到${index}处`);
		const tempNode = new Node(value, null);
		let current = this.head;
		let currentNext = current.next;
		let i = 1;
		if (index > this.length + 1 || index < 0) {
			console.log('索引值无效');
			return '索引值无效';
		}
		while (i < index) {
			if (current && current.next) {
				current = current.next;
				currentNext = current.next;
			}
			i++;
		}
		tempNode.next = current.next;
		current.next = tempNode;
		this.length++;
		return this;
	}

	/**
	 * 移除index处的节点
	 * @param { Number } index
	 * @return { LinkList | String }
	 */
	removeNode(index) {
		console.log(`移除${index}处节点`);
		let current = this.head;
		let currentNext = current.next;
		let i = 1;
		if (index > this.length + 1 || index < 0 || current.next === null) {
			console.log('索引值无效');
			return '索引值无效';
		}
		while (i < index) {
			if (current && current.next) {
				current = current.next;
				currentNext = current.next;
			}
			i++;
		}
		current.next = currentNext.next;
		this.length--;
		return this;
	}
	/**
	 * 查询 value 在链表中第一次出现的地方
	 * @param value 需要查询的值
	 * @return { Number }
	 */
	queryValue(value) {
		console.log(`查询 ${value} 在链表中第一次出现的地方`);
		let current = this.head;
		let currentNext = current.next;
		let index = 0;
		while (value !== current.value) {
			if (current && current.next) {
				current = current.next;
				currentNext = current.next;
				index++;
			} else {
				return -1;
			}
		}
		return index;
	}
	/**
	 * @description 替换指定节点的值
	 * @param { String | Number }value
	 * @param { Number } index
	 */
	replaceNode(value, index) {
		let current = this.head;
		let currentNext = current.next;
		let i = 1;
		if (index > this.length + 1 || index < 0 || current.next === null) {
			console.log('索引值无效');
			return '索引值无效';
		}
		while (i < index) {
			if (current && current.next) {
				current = current.next;
				currentNext = current.next;
			}
			i++;
		}
		current.value = value;
		return this;
	}
	/**
	 * @override
	 * @description 重写了 toString 方法
	 * @return {string}
	 */
	toString() {
		const nodeArray = [];
		let current = this.head;
		let i = 0;
		while (current) {
			nodeArray.push(current.value);
			current = current.next;
			i++;
		}
		return `当前链表为：${ nodeArray.join('->')}`;
	}
}

class LinkListB extends LinkList {
	/**
	 *
	 * @param { BNode } head
	 */
	constructor(head) {
		super(head);
		this.length = 0;
	}

	/**
	 * @override
	 * @param value
	 * @param index
	 */
	insertNode(value, index) {}
	removeNode(index) {}
	queryValue(value) {}
	replaceNode(value, index) {}
}
