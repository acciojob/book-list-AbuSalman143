//your JS code here. If required.
    document.getElementById('book-form').addEventListener('submit', function(e) {
      e.preventDefault();

      // Get the form values
      var titleInput = document.getElementById('title');
      var authorInput = document.getElementById('author');
      var isbnInput = document.getElementById('isbn');

      var title = titleInput.value;
      var author = authorInput.value;
      var isbn = isbnInput.value;

      // Create a new row with the form values
      var newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><span class="delete">X</span></td>
      `;

      // Append the new row to the table body
      var bookList = document.getElementById('book-list');
      bookList.appendChild(newRow);

      // Clear the form inputs
      titleInput.value = '';
      authorInput.value = '';
      isbnInput.value = '';
    });

    // Add event listener to handle row deletion
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        var row = e.target.parentElement.parentElement;
        row.remove();
      }
    });