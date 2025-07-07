// import { response } from "express";

const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
     fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    fetch(API_URL).then(response => response.json())
        .then(bookmarks => {
            bookmarks.forEach(bookmark => addBookmarkToDOM(bookmark));
        })
        .catch(error => console.error('Error fetching bookmarks:', error));
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
   const bookmarkParent = document.querySelector('#bookmark-list');
   const bookmarkItem = document.createElement('li');
   bookmarkItem.className = 'bookmark-item';
   bookmarkItem.setAttribute('id', bookmark.id)
   
   const bookmarkName = document.createElement('span');
   bookmarkName.textContent = `${bookmark.bookmark} (${bookmark.category})`;

   const deleteBtn = document.createElement('button');
   deleteBtn.title = 'Delete';
   deleteBtn.addEventListener('click' , () => deleteBookmark(bookmark.id));
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

    let newBookmark = { bookmark: bookmarkUrl, category : bookmarkcategory}

    axios.post(API_URL, newBookmark, {
        headers : {
            'Content-Type': "application/json"
        }
    }).then(response => {
        addBookmarkToDOM(response.data.bookmark);
        document.getElementById("bookmark-url").value = '';
        document.getElementById("bookmark-category").value = '';
    } ).catch( error => {
        console.error('Error in adding the bookmark:' + error);
    })
});

// Delete a bookmark
function deleteBookmark(id) {
    axios.delete( `${API_URL}/${id}` )
        .then( () => {
            const bookmarkEle = document.querySelector(`[id='${id}']`) ;
            if (bookmarkEle) bookmarkEle.remove();
        })
        .catch( error => {
            console.error('Error in deleting the bookmark', error);
        })
    
}