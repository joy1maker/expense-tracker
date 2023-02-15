from fastapi import FastAPI
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
try:
    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="fastapi"
    )
    mycursor = mydb.cursor()
except:
    print("db error")




@app.get('/')
async def root():
    return {"massage":"hello world"}


@app.post('/user')
async def addUser(user_name,password):
    sql = "INSERT INTO users (name, password) VALUES (%s, %s)"
    val = (user_name, password)
    mycursor.execute(sql, val)
    mydb.commit()
    return {"massage":f"hello {user_name} with password {password}"}
@app.get('/user')
async def getUser(user_name,password):
    sql = "SELECT * FROM users WHERE name = %s AND password = %s"
    val = (user_name, password)
    mycursor.execute(sql, val)
    results = mycursor.fetchall()
    exist =not not results
    return {
        "exist":exist,
        "user":results
        }
@app.post('/transaction/{userID}')
async def addTransaction(userID,transaction_name,transaction_type,transaction_amount):
    sql ="INSERT INTO transactions (transaction_type, transaction_name,transaction_amount) VALUES (%s, %s,%s,%s)"
    vals = (transaction_type,transaction_name,transaction_amount,userID)
    print(vals)
    mycursor.execute(sql,vals)
    mydb.commit()
    return {"massage":"task added"}
@app.delete('/transaction/{transactionID}')
async def removeTransaction(transactionID):
    sql=f"DELETE FROM `transactions` WHERE transaction_id={transactionID}"
    mycursor.execute(sql)
    mydb.commit()
    return{"massage":"task deleted succsfully"}