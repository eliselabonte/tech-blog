const editButtonHandler = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        document.location.replace(`/dashboard/edit/${id}`);
        console.log('post deleted')
    } else {
        alert('Failed to find editor page');
    }
};

document
    .querySelector('#editPost')
    .addEventListener('click', editButtonHandler)