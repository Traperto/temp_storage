export class Environment {
    public server: ServerConfig;
    public sqlite: DbConfig;
}

class ServerConfig {
    public useHttps: boolean;
    public privateKey: string;
    public certificate: string;
    public port: number = 8080;
}

class DbConfig {
    public path: string;
}