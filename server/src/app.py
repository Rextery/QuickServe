from flask import Flask,request,render_template
from flask_pymongo import PyMongo
from models import *

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/QuickServeDB'
mongo = PyMongo(app)


@app.route('/admin')
def Admin():
    return render_template('admin.html')

@app.route('/Productos',methods=['POST'])
def create_Productos():
    print(request.json)
    
    return {'message': 'received'
            
            }
if __name__ == "__main__":
    app.run(debug=True)
