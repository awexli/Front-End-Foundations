function linearSearch(list, item) {
    for(let i = 0; i < list.length; i++) {
        if (item === list[i]) {
            return 'Found!';
        }
    }
}

linearSearch([2,6,7,90,103], 90);