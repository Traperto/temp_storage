export class Environment {
    public server: ServerConfig;
}

class ServerConfig {
    public useHttps: boolean;
    public privateKey: string;
    public certificate: string;
    public port: number = 8080;
}