const noteContent = document.getElementById('note-content');
const saveButton = document.getElementById('save-button');
const notesList = document.getElementById('notes-list');

saveButton.addEventListener('click', () => {
    const noteText = noteContent.value.trim();
    if (noteText) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        notesList.appendChild(noteElement);
        noteContent.value = ''; // Clear the text area after saving
    }
});
