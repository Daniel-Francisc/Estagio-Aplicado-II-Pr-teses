## Extensões e bibliotecas usadas:
## ------------------------------------
## dotenv:
## já dentro da pasta python:
##   py -3 -m venv .venv
## após isso, ative o venv:
##   .venv\Scripts\activate
## ------------------------------------
## flask: pip install Flask
## ------------------------------------
## supabase: pip install flask supabase
## ------------------------------------

class Conexao:
    def __init__(self, host, port, user, password, database):
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.database = database