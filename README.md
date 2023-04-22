# NoteWit

## How to start Django server

```
git clone https://github.com/kixygod/NoteWit.git -b front
cd NoteWit
pip install virtualenv
virtualenv env
On windows: .\env\Scripts\activate
pip install -r requirements.txt
python .\manage.py runserver
```

After that you will have access to the Django (Rest framework) link. Open browser and follow the [link](http://127.0.0.1:8000/api/)

## How to start React server

```
cd frontend
npm i react-router-dom@5.3.0
npm start
```

After that you will have access to the React server link. Open browser and follow the [link](http://localhost:3000/)

## Urls

For Django:

-   api/notes/ - to see every note in database
-   api/notes/1 - to see 1st note in database
-   api/admin/ - to enter the Django administration panel (login:pass admin:123123)

For React:

-   / - to see every note on frontend
-   /note/1 - to see 1st note on frontend
