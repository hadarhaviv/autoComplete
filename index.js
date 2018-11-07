function Node() {
    this.end = false;
    this.dict = {};

    this.search = function (prefix, suffix) {

        if (prefix.length == 0) {
            this.scan(suffix)

        }
        else {
            let c = prefix[0];
            if (c in this.dict) {
                this.dict[c].search(prefix.substr(1), suffix + c);
            }
            else {
                console.log("search not found")
            }
        }

    }

    this.insert = function (prefix) {

        if (prefix.length == 0) {
            this.end = true;
        }
        else {
            let c = prefix[0];

            if (!(c in this.dict)) {
                this.dict[c] = new Node();
            }
            this.dict[c].insert(prefix.substr(1));

        }
    }

    this.scan = function (str) {
        if (this.end == true) {
            console.log(str)
        }
        for (var key in this.dict) {
            this.dict[key].scan(str + key);

        }

    }
}

let root = new Node();
root.insert("hadar");
root.insert("had");
root.insert("oren");
root.insert("or");
root.insert("orna");



