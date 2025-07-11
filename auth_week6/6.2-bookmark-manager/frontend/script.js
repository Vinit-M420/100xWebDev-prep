const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
     fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    // Clear existing bookmarks first
    const bookmarkParent = document.querySelector('#bookmark-list');
    bookmarkParent.innerHTML = '';
    fetch(API_URL).then(response => response.json())
        .then(bookmarks => {
            bookmarks.forEach(bookmark => addBookmarkToDOM(bookmark));
        })
        .catch(error => console.error('Error fetching bookmarks:', error));
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
   console.log('DEBUG: Bookmark object:', bookmark); // ADD THIS
   console.log('DEBUG: Bookmark ID:', bookmark.id);  // AND THIS

   const bookmarkParent = document.querySelector('#bookmark-list');
   const bookmarkItem = document.createElement('li');
   bookmarkItem.className = 'bookmark-item';
   bookmarkItem.setAttribute('data-id', bookmark.id)
   
   const bookmarkName = document.createElement('span');
   if (bookmark.category === "" || bookmark.category.length === 0){
        bookmarkName.textContent = `${bookmark.bookmark}`;
   }
   else {
    bookmarkName.textContent = `${bookmark.bookmark} (${bookmark.category})`;
    }


   const deleteBtn = document.createElement('button');
   deleteBtn.title = 'Delete';
   deleteBtn.addEventListener('click' , () => {
        console.log("DELETE CLICKED, ID:", bookmark.id); // Add this
        deleteBookmark(bookmark.id) 
    });
   deleteBtn.className = 'delete-btn';
   deleteBtn.innerHTML =
   "<img src='icons8-trash-can-48.png' id='del-img'></img>"

   bookmarkItem.appendChild(bookmarkName);
   bookmarkItem.appendChild(deleteBtn);
   bookmarkParent.appendChild(bookmarkItem); 
}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', () => {
    const bookmarkUrl = document.getElementById("bookmark-url").value;
    const bookmarkcategory = document.getElementById("bookmark-category").value;

    if (!bookmarkUrl) {
        console.error('Input not found');
        return;
    }

    let newBookmark = { bookmark: bookmarkUrl, category : bookmarkcategory }

    axios.post(API_URL, newBookmark, {
        headers : {
            'Content-Type': "application/json"
        }
    }).then(response => {
            console.log('Response:', response.data);
        addBookmarkToDOM(response.data.bookmark);
        document.getElementById("bookmark-url").value = '';
        document.getElementById("bookmark-category").value = '';
    } ).catch( error => {
        console.error('Error in adding the bookmark:' + error);
    })
});



function deleteBookmark(id) {
    console.log('deleteBookmark called with ID:', id);
    console.log('DELETE URL:', `${API_URL}/${id}`);
    
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
    .then(response => {
        console.log('Delete response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Successfully deleted from backend, now remove from DOM
        const bookmarkEle = document.querySelector(`[data-id='${id}']`);
        console.log('Found element to remove:', bookmarkEle);
        if (bookmarkEle) {
            bookmarkEle.remove();
        }
    })
    .catch(error => {
        console.error('Error in deleting the bookmark:', error);
    });
}