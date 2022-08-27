
from fastapi import FastAPI,Body
from database import db
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/projects")
def getNotes():
    notes = db.search_by_value('developer', 'proj', "id", "*", get_attributes=['*'])
    return notes

@app.post("/projects")
def addNotes(data = Body()):
    db.insert('developer', 'proj', [{"body":data}])
    notes = db.search_by_value('developer', 'proj', "id", "*", get_attributes=['*'])
    return notes

@app.get("/project/{pk}")
def getNote(pk:str):
    notes = db.search_by_hash('developer', 'proj', [pk], get_attributes=['*'])
    return notes[0]