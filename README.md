# NoteWit

## How to start

```
git clone https://github.com/kixygod/NoteWit.git -b develop
cd NoteWit
pip install virtualenv
virtualenv env
On windows: .\env\Scripts\activate
pip install -r requirements.txt
python .\manage.py runserver
```

After that you will have access to the Django (Rest framework) link. Open browser and follow the [link](http://127.0.0.1:8000/)

## Urls

-   /notes/ - to see every note in database
-   /notes/1 - to see 1st note in database
-   /admin/ - to enter the Django administration panel (login:pass admin:123123)
