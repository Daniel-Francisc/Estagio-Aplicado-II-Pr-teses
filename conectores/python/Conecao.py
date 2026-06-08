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
## dotenv: pip install python-dotenv
## ------------------------------------
import os 
import supabase 
import dotenv

dotenv.load_dotenv()

class Conexao:
    def __init__(self,):
        self.client = supabase.create_client(
            os.getenv("SUPABASE_URL"),
            os.getenv("SUPABASE_KEY")
        )
conexao = Conexao()

resultado = (conexao.client.table("tb_tipo_usuario").select("*").execute())
print(resultado.data)

