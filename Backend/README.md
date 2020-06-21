# CrowdDistance Backend

This serves the production build of the frontend and the REST APIs required to run CrowdDistance


## Installation

1.  Install Dependencies

    * [Node.js](https://nodejs.org/en/)

3.  Go to the project's root directory **cd /my/path/to/directory**
4.  Run **npm install**
5.  Start using it! **npm start**

## Available end-points

### GET /api/v1/count

Gets crowd count in all areas.

### POST /api/v1/count

Creates an entry (be sure you are sending the headers via your library).

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
      "cctvId":"6",
      "latitude":12.971879,
      "longitude":77.595739,
      "peopleCount": 25
    }
```

