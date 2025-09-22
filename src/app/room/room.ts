import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ajouter FormsModule
import { Room, RoomList } from './rm';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule], // Ajouter FormsModule
  templateUrl: './room.html',
  styleUrl: './room.scss'
})

export class Rooms {

  hotelName = "Hill Hotel";

  hideRooms = false;

  rooms: Room = {
    availableRooms: 12,
    bookedRooms: 8,
    totalRooms: 12 + 8
  };


  roomList: RoomList[] = [];

  showAddForm = false; // Nouvelle propriété

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 101,
        roomType: "Deluxe room",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 1400,
        photos: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Nov-2026"),
        rate: 4.5
      },

      {
        roomNumber: 102,
        roomType: "Private Suite",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 2400,
        photos: 'https://images.unsplash.com/photo-1743410976099-6114097db9ba?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Nov-2026"),
        rate: 4.0
      },

      {
        roomNumber: 103,
        roomType: "Luxury room",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 3400,
        photos: 'https://images.unsplash.com/photo-1668260592478-a6513b0a690e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVscyUyMHJvb218ZW58MHx8MHx8fDA%3D',
        checkinTime: new Date("22-Dec-2026"),
        checkoutTime: new Date("22-Dec-2027"),
        rate: 3.5
      },

      {
        roomNumber: 104,
        roomType: "Presidential Suite",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 4400,
        photos: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date("12-Jan-2027"),
        checkoutTime: new Date("12-Jan-2028"),
        rate: 5.0
      }

    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  reserveRoom(room: RoomList) {
    // Logique de réservation
    console.log('Réservation de la chambre:', room.roomNumber);
    alert(`Réservation confirmée pour la chambre ${room.roomNumber}`);
    
    // Ici vous pourriez :
    // - Appeler un service pour enregistrer la réservation
    // - Mettre à jour le statut de la chambre
    // - Rediriger vers une page de confirmation
  }

  toggleAddRoomForm() {
    this.showAddForm = !this.showAddForm;
  }

  addNewRoom(form: any) {
    if (form.valid) {
      const formValue = form.value;
      
      // Vérifier si le numéro de chambre existe déjà
      const existingRoom = this.roomList.find(room => room.roomNumber === +formValue.roomNumber);
      if (existingRoom) {
        alert('Ce numéro de chambre existe déjà !');
        return;
      }

      const newRoom: RoomList = {
        roomNumber: +formValue.roomNumber,
        roomType: formValue.roomType,
        amenities: formValue.amenities,
        price: +formValue.price,
        photos: formValue.photos,
        checkinTime: new Date(formValue.checkinTime),
        checkoutTime: new Date(formValue.checkoutTime),
        rate: +formValue.rate
      };

      this.roomList.push(newRoom);
      
      // Mettre à jour les statistiques
      this.rooms.availableRooms++;
      this.rooms.totalRooms++;

      // Réinitialiser le formulaire et le masquer
      form.reset();
      this.showAddForm = false;
      
      alert(`Chambre ${newRoom.roomNumber} ajoutée avec succès !`);
    }
  }

}
