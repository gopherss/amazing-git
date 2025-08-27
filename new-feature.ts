interface IUser<T> {
    name: string;
    email: string;
    addres: T;
    isActive: boolean;
}

const sendMessage = <T>(message: T) => message ? "Message Recived" : "Message Not Found";

