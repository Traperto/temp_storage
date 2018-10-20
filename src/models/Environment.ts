export class Environment {
    public server: ServerConfig;
    public sqlite: DbConfig;
    public jwt: JWTConfig;
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

class JWTConfig {
    public secretOrPublicKey: string;
}