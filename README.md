# Group E API Project

A simple REST API for managing exams, developed as part of a group activity.

## Contributors
 
- **Member 1:Vince Cabunilas**: Implemented GET /exams endpoint (returns hardcoded users)
- **Member 2:Erica Juarez**: Implemented POST /exams endpoint (adds a new exam to the collection)
- **Member 3:Liezel Tumbaga**: Implemented PUT /exams/:id endpoint (updates an existing exam)

## API Documentation

### Base URL
`http://localhost:3000`

### Endpoints

#### GET /exam-group
Returns the group identification message.

**Example Response:**
```json
{
  "message": "Group E API"
}

### Endpoints
Returns a list of users.

Example Response:

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "student"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "student"
  },
  {
    "id": 3,
    "name": "Robert Johnson",
    "email": "robert.johnson@example.com",
    "role": "professor"
  }
]


POST /exams
Creates a new exam and adds it to the collection.
{
  "title": "JavaScript Fundamentals",
  "date": "2023-12-10",
  "duration": 90,
  "location": "Room D101"
}

PUT /exams/:id
Updates an existing exam by ID.

URL Parameters:

id: The ID of the exam to update

Request Body:
{
  "title": "Advanced JavaScript",
  "duration": 120
}

Example Response:
{
  "id": 1,
  "title": "Advanced JavaScript",
  "date": "2023-12-10",
  "duration": 120,
  "location": "Room D101"
}