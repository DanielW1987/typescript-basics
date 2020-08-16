class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(): T[] {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Foobar");
textStorage.addItem("text");
textStorage.removeItem("Foobar");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(20);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: "Max"});
// objStorage.addItem({name: "Manuel"});
// objStorage.removeItem({name: "Max"}); // does not work, because it's a new object
