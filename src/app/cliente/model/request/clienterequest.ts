import { Cliente } from "../cliente";

export interface ClienteRequest extends Cliente {
    valid: boolean;
}