import harperdb
from dotenv import load_dotenv
import os
load_dotenv()

HARPERDB_PASSWORD =os.environ['HARPERDB_PASSWORD']
HARPERDB_URL = os.environ['HARPERDB_URL']
HARPERDB_USERNAME = os.environ['HARPERDB_USERNAME']
db = harperdb.HarperDB(
    url=HARPERDB_URL,
    username=HARPERDB_USERNAME,
    password=HARPERDB_PASSWORD
)