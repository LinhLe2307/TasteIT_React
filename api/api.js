exports.handler = async (event, context) => {
    const notesData = require('./notes.json');
  
    const notes = notesData.notes;
  
    // Handle different API routes
    if (event.path === '/api/notes') {
      // Handle GET request for all notes
      if (event.httpMethod === 'GET') {
        return {
          statusCode: 200,
          body: JSON.stringify(notes)
        };
      }
  
      // Handle POST request to create a new note
      if (event.httpMethod === 'POST') {
        const newNote = JSON.parse(event.body);
  
        // Generate a unique ID for the new note
        const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
  
        const createdNote = {
          id,
          ...newNote
        };
  
        notes.push(createdNote);
  
        return {
          statusCode: 201,
          body: JSON.stringify(createdNote)
        };
      }
    }
  
    // Handle GET request for a specific note by ID
    if (event.path.startsWith('/api/notes/')) {
      const noteId = parseInt(event.path.split('/').pop());
      const note = notes.find((n) => n.id === noteId);
  
      if (note) {
        return {
          statusCode: 200,
          body: JSON.stringify(note)
        };
      }
  
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Note not found' })
      };
    }
  
    // Return 404 for any other routes
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Route not found' })
    };
  };
  