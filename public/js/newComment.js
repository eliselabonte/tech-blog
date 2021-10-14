const newCommentHandler = async(event) => {
    event.preventDefault();

    const text = document.querySelector('#comment_text').value.trim();

    const userId = event.target.getAttribute('data-id');

    const postId = event.target.getAttribute('data-post');

    if (text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ text, post_id: `${postId}`, user_id: `${userId}` }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/posts/${postId}`);
        } else {
            alert('Failed to comment');
        }
    }
};

document
    .querySelector('#leaveComment')
    .addEventListener('submit', newCommentHandler)