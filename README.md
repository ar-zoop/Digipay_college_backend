# Digipay college backend

## Setup in windows - for running in docker.
1. Clone the project in a folder on your system.
2. Run powewrshell in admin mode
3. Turn on docker
4. Go to powershell, locate the root of the project. Type `docker compose up --build` in the powershell.
5. You should get something as follows:
 ```
   [+] Running 2/0
 ✔ Container forarzo-mysqldb-1  Created                                                                            0.0s
 ✔ Container forarzo-app-1      Created                                                                            0.0s
Attaching to app-1, mysqldb-1
mysqldb-1  | 2024-04-25 19:39:15+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.0.33-1.el8 started.
mysqldb-1  | 2024-04-25 19:39:15+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
mysqldb-1  | 2024-04-25 19:39:15+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.0.33-1.el8 started.
mysqldb-1  | '/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
mysqldb-1  | 2024-04-25T19:39:16.327286Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
mysqldb-1  | 2024-04-25T19:39:16.328360Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.33) starting as process 1
mysqldb-1  | 2024-04-25T19:39:16.334713Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
mysqldb-1  | 2024-04-25T19:39:16.616245Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
mysqldb-1  | 2024-04-25T19:39:16.746739Z 0 [System] [MY-010229] [Server] Starting XA crash recovery...
mysqldb-1  | 2024-04-25T19:39:16.755883Z 0 [System] [MY-010232] [Server] XA crash recovery finished.
mysqldb-1  | 2024-04-25T19:39:16.845993Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
mysqldb-1  | 2024-04-25T19:39:16.846028Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
mysqldb-1  | 2024-04-25T19:39:16.849378Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
mysqldb-1  | 2024-04-25T19:39:16.860634Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
mysqldb-1  | 2024-04-25T19:39:16.860707Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.33'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
app-1      |
app-1      | Sequelize CLI [Node: 16.20.2, CLI: 6.6.2, ORM: 6.37.3]
app-1      |
app-1      | Loaded configuration file "config/config.json".
app-1      | Using environment "development".
app-1      | No migrations were executed, database schema was already up to date.
app-1      |
app-1      | > base_nodejs@1.0.0 dev
app-1      | > npx nodemon src/index.js
app-1      |
app-1      | [nodemon] 2.0.22
app-1      | [nodemon] to restart at any time, enter `rs`
app-1      | [nodemon] watching path(s): *.*
app-1      | [nodemon] watching extensions: js,mjs,json
app-1      | [nodemon] starting `node src/index.js`
app-1      | database_development root password {
app-1      |   username: 'root',
app-1      |   password: 'password',
app-1      |   database: 'database_development',
app-1      |   host: 'mysqldb',
app-1      |   dialect: 'mysql',
app-1      |   localhost: '3307'
app-1      | }
app-1      | (node:56) Warning: Accessing non-existent property 'use' of module exports inside circular dependency
app-1      | (Use `node --trace-warnings ...` to show where the warning was created)
app-1      | (node:56) Warning: Accessing non-existent property 'use' of module exports inside circular dependency
app-1      | (node:56) Warning: Accessing non-existent property 'use' of module exports inside circular dependency
app-1      | Successfully started the server on PORT: 3000
 ```

## Setup in Windows- for running in terminal
1. Clone the github repo
2. Run mysql ---- you'll need to make some changes if you run mysql locally/ or on docker. Change config.json (in 2 places) => From `"host": "mysqldb"` change it to `"host": "localhost "` or `"host": "127.0.0.1"`
3. In your ide's terminal, run: `npm install`
4. `npm install -g sequelize-cli`
5. `sequelize db:migrate`
6. `npm run dev`

## If Fatal error : out of javascript heap memory comes 
Write in the powershell :
`$env:NODE_OPTIONS="--max-old-space-size=4096"`

Memory leaks are in progress of being fixed. Till then increase the heap memory.
