function LinkedList() {
}
LinkedList.prototype.head = function() {
    return this.head.value;
}
LinkedList.prototype.search = function(val) {
    var current = this.head;
    while (current && current.value != val) current = current.next;
    return current;
}
LinkedList.prototype.insert = function(val) {
    var li = new LinkedListItem(null, val);
    li.next = this.head;
    this.head = li;
}
LinkedList.prototype.delete = function(list_item) {
    list_item.prev.next = list_item.next;
    list_item.next.prev = list_item.prev;
}

function LinkedListItem(prev, value) {
    this.value = value;
    this.prev = prev;
    this.next;
}
