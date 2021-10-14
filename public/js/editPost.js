const saveButtonHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const post_body = document.querySelector('#postBody').value.trim();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        if (title && post_body) {
            // const user_id = req.sessions.user_id;
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, post_body }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to save post');
            }
        }
    }
};

const delButtonHandler = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            console.log('post deleted')
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('#editForm')
    .addEventListener('submit', saveButtonHandler)

document
    .querySelector('#deleteButton')
    .addEventListener('click', delButtonHandler);