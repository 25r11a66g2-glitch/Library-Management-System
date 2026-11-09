from flask import Flask, render_template

app = Flask(__name__)


# HOME PAGE
@app.route("/")
def home():
    return render_template("index.html")


# LOGIN PAGE
@app.route("/login")
def login():
    return render_template("login.html")


# REGISTER PAGE
@app.route("/register")
def register():
    return render_template("register.html")


# ADMIN PAGE
@app.route("/admin")
def admin():
    return render_template("admin.html")


# BOOK DETAILS PAGE
@app.route("/book-details")
def book_details():
    return render_template("book-details.html")


# STUDENT DASHBOARD
@app.route("/student-dashboard")
def student_dashboard():
    return render_template("student-dashboard.html")


# BROWSE BOOKS
@app.route("/browse-books")
def browse_books():
    return render_template("browse-books.html")


# RUN WEBSITE
if __name__ == "__main__":
    app.run(debug=True)