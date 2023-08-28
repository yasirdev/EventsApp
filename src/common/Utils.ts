const Utils = {
    getCategoryIcon:(tagName:string) => {
        switch (tagName) {
            case 'art':
                return 'violin'
            case 'movie':
                return 'movie'
            case 'sports':
                return 'ball'
            default:
                break;
        }
    }
}

export {Utils};