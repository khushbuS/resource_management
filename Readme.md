# Introduction
Single page web application to show the current CPU and memory usage at server in form of Bar graph.

# Requirements
Python modules required are:
django
psutil

Please install it using requirements.txt as:
pip install -r requirements.txt


# Instructions
1. Install the mentioned dependencies in requirements.txt.
2. Start python server using: python manage.py runserver
4. Browse the application at: http://127.0.0.1:8000/myapp/home

# Basic Workflow

Django server exposes two endpoints one for getting cpu and memory usage(using psutil) in json format and other for rendering html file.

Polling mechanism is used in javascript to perform GET request(url: '/myapp/home') after every 3 seconds continously the response of which is used to draw a bar graph. On every successful request the graph is first cleared and the updated one is rendered.