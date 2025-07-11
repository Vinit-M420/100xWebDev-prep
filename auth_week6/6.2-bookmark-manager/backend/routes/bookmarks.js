let bookmarks = []; // in memory space
let idcount = 1;


export async function addBookmark(req,res,next){
    const bookmarkName = req.body.bookmark;
    const bookmarkcategory = req.body.category;

    if (!bookmarkName || bookmarkName === ''){
        return res.status(400).json({ error: 'Enter valid url for the bookmark'})
    }


    const newBookmark = {
        id: idcount++,
        bookmark: bookmarkName,
        category: bookmarkcategory
    };

    bookmarks.push(newBookmark);

    
    res.json({ 
        message: 'Added your bookmark', 
        bookmark: newBookmark
        
    });

}

export async function deleteBookmark(req,res,next){
    const idToDelete = parseInt(req.params.id);
    if (!idToDelete){
         return res.status(400).json({ error: 'Enter valid bookmark id'})
    }

    let bookmarkId = bookmarks.findIndex(b => b.id === idToDelete);
    
    if (bookmarkId !== -1){
        bookmarks.splice(bookmarkId, 1);
        return res.status(200).json({ message: 'Bookmark successfully removed'})
    }
    else {
        res.status(400).json({ error: 'Given Bookmark id not found' })
    }

}

export async function getAllBookmarks(req,res,next){
    return res.json(bookmarks);
}