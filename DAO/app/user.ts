class Venta {
	SalesReasonID: string;
	Name: string;
	ReasonType: string;
	ModifiedDate: string;

	constructor(id: string, name: string, reason: string, date: string) {
		this.SalesReasonID = id;
		this.Name = name;
		this.ReasonType = reason;
		this.ModifiedDate = date;
	}

}
export {Venta};
