const newFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const post_body = document.querySelector('#postBody').value.trim();

    if (title && post_body) {
        // const user_id = req.sessions.user_id;
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, post_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};


document
    .querySelector('#newPostForm')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);