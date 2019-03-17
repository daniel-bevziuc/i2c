# i2c dashboard

### Usage:

1. Download and install mysql;
2. Create database `i2c`;
3. Import data(csv files);
4. Navigate to `api` folder (`cd api/`) and run following commands:
   - `npm install` - download packages
   - `npm migrate:latest` - create tables
   - `npm start` - run project

Note: check .env variables. In order to add env variables create a file `.env` in `api` folder

### Environment variables

```
MYSQL_USER = process.env.MYSQL_USER || 'root';
MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'root';
MYSQL_HOST = process.env.MYSQL_HOST || 'localhost:3306';
MYSQL_DB = process.env.MYSQL_DB || 'i2c';
```

### Routes:

- `localhost:3000/weekly`
- `localhost:3000/top`

### Usage:

1. Create `.env` variable in `frontend` folder copy content of `.env.example` file
2. Run `npm install`
3. Run `npm start`
