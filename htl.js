import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HotelApp() {
  const [hotels, setHotels] = useState([
    { name: "Hotel Paradise", location: "Malibu" },
    { name: "Mountain Retreat", location: "Aspen" },
  ]);

  const [newHotel, setNewHotel] = useState({ name: "", location: "" });

  const addHotel = () => {
    if (newHotel.name && newHotel.location) {
      setHotels([...hotels, newHotel]);
      setNewHotel({ name: "", location: "" });
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Hotel List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel, index) => (
            <Card key={index} className="rounded-2xl shadow-md p-4">
              <CardContent>
                <h2 className="text-xl font-semibold">{hotel.name}</h2>
                <p className="text-gray-500">{hotel.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Add a New Hotel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            placeholder="Hotel Name"
            value={newHotel.name}
            onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
          />
          <Input
            placeholder="Location"
            value={newHotel.location}
            onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
          />
        </div>
        <Button onClick={addHotel}>Add Hotel</Button>
      </div>
    </div>
  );
}
