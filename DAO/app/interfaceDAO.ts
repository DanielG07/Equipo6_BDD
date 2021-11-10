import { Venta} from "./user";

export default interface InterfaceDAO {
	getSale: (id: string) => any;
	getSales: () => Promise<Venta[]>;
}
