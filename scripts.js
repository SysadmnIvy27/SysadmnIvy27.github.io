const form = document.getElementById('comment');
const commentText = document.getElementById('commentTxt');
const commentArea = document.getElementById('comments');
const enterUser = document.getElementById('user');
let user = "";
const text = commentText.value;
let comments = [];

document.addEventListener("DOMContentLoaded", function(event) {
    const storedComments = localStorage.getItem("comments");
    
    if(storedComments){
        comments = JSON.parse(storedComments);

        comments.forEach((comment) => {
        commentArea.innerHTML += comment;
    });
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let user = enterUser.value;
    const text = commentText.value;
    const formattedComment = '<fieldset class="comment"><h5>' + user + '</h5><br><p>' + text +'</p></fieldset>';
    commentArea.innerHTML += formattedComment;
    comments.push(formattedComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    enterUser.value = "";
    commentText.value = "";
});

function clear_comments(){
    localStorage.removeItem("comments");
}