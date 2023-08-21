from pymongo import MongoClient

MONGODB_URI = 'mongodb+srv://wuttproj:wuttprojusers@users.vuxdn1m.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(MONGODB_URI)

for db in client.list_database_names():
    print(db)