document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('contentInput').value;
    
    var note = document.createElement('li');
    note.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';
    
    document.getElementById('notesList').appendChild(note);
    
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';
  });