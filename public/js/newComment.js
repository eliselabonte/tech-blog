const newFormHandler = async(event) => {
    event.preventDefault();
    const form = $('.newPost').serialize()
    const data = new FormData(document.getElementById('newPostForm'))
    const title = $('#title').val().trim();
    const postBody = $('#postBody').val().trim();

    // const category = $('#category').find(":selected").val().trim();
    if (title && postBody) {
        const user_id = req.session.user_id;
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, postBody, user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
            body: new FormData(document.getElementById('post_body'))
        });

        if (response.ok) {
            document.location.replace('/create');
        } else {
            alert('Failed to create report');
        }
    }
};

document
    .querySelector('.new-sighting-form')
    .addEventListener('submit', newFormHandler);