function Heap() {
    this.data = [];
}
Heap.prototype.parent = function(i) {
    return Math.floor(i/2);
};
Heap.prototype.left_index = function(i) {
    return i*2+1;
};
Heap.prototype.right_index = function(i) {
    return (i+1)*2;
};
Heap.prototype.get_length = function() {
    return this.data.length;
};
Heap.prototype.heap_size = function() {
    return this.size;
};
Heap.prototype.heap_sort = function() {
    this.build_max_heap();
    var temp;
    for (var i = this.data.length - 1; i >= 1; i--) {
        temp = this.data[0];
        this.data[0] = this.data[i];
        this.data[i] = temp;
        this.size = this.size - 1;
        this.max_heapify(0);
    }
};
Heap.prototype.build_max_heap = function() {
    this.size = this.data.length;
    var i;
    // TODO: need to see whehter to use floor or ceil
    for (i = Math.ceil(this.length() / 2);i >= 0; i++) {
        this.max_heapify(i);
    }
};
// assumes the subtrees at left and right are already max heaps
// efffectively is the process used for one node
Heap.prototype.max_heapify = function(i) {
    var left = this.left_index(i);
    var right = this.right_index(i);
    var largest = i;
    if (left < this.heap_size() && this.data[left] > this.data[i])
        largest = left;
    if (right < this.heap_size() && this.data[right] > this.data[largest])
        largest = right;
    if (largest != i) {
        largest_val = this.data[largest];
        this.data[largest] = this.data[i];
        this.data[i] = largest_val;
        this.max_heapify(largest);
    }
};
Heap.prototype.extract_max = function() {
};
Heap.prototype.heap_increase_key = function() {
};
Heap.prototype.heap_maximum = function() {
};
Heap.prototype.max_heap_insert = function() {
};
/*
function HeapNode(data, index) {
};
*/
