export interface Room {
   totalRooms: number;
   availableRooms: number;
   bookedRooms: number;
}
export interface RoomList {
   // for local 
   //  roomNumber: number;
   //for api
   roomNumber: string;
   roomType: string;
   amenities: string;
   price: number;
   // photos: string;
   chekInTime: Date;
   checkOutTime: Date;
} 