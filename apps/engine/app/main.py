from fastapi import FastAPI

app = FastAPI(title='Kradle Engine', version='0.1.0')


@app.get('/health')
def health_check() -> dict[str, str]:
    return {'status': 'ok'}


@app.get('/')
def root() -> dict[str, str]:
    return {'message': 'Kradle engine is running'}
