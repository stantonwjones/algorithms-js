function DirectAddressTable(size) {
    this.data = new Array(size);
}
DirectAddressTable.prototype.get_key = function(obj) {
    return obj.hash() % this.data.size;
}
DirectAddressTable.search = function(key) {
    return this.data(key);
}
DirectAddressTable.delete = function(key) {
    this.data[key] = null;
}
