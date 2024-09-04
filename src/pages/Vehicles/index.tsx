import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search,NavBar } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles1();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);


const newVehicle = () =>{
  let pess: IVehicle = {
    id: 3,
    name: 'teste3',
    description: 'ruim',
    plate: 'tes',
    isFavorite: false,
    year: 2202,
    color: 'blue',
    price: 12,
    createdAt: new Date('2024-08-08T10:30:00')
  }

  setVehicles([...vehicles, pess])
}

const getVehicles1 = () =>{
  const pessoa: IVehicle = {
    id: 1,
    name: 'teste1',
    description: 'ruim',
    plate: 'tes',
    isFavorite: false,
    year: 2202,
    color: 'blue',
    price: 12,
    createdAt: new Date('2024-08-08T10:30:00')
  };
  const pessoa2: IVehicle = {
    id: 2,
    name: 'teste2',
    description: 'ruim',
    plate: 'tes',
    isFavorite: false,
    year: 2202,
    color: 'blue',
    price: 12,
    createdAt: new Date('2024-08-08T10:30:00')
  };
  const pessoa3: IVehicle = {
    id: 3,
    name: 'teste3',
    description: 'ruim',
    plate: 'tes',
    isFavorite: false,
    year: 2202,
    color: 'blue',
    price: 12,
    createdAt: new Date('2024-08-08T10:30:00')
  };

  return [pessoa,pessoa2,pessoa3]


}

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <NavBar>      
        <Search placeholder="Pesquisar notas" value={search} onChange={() => {}} />
        </NavBar>
        <Button text="Add new vehicle" onClick={newVehicle} />
        <div className={styles.Grid}>
        {vehicles.map((vehicle) => (
        
          <Card title={vehicle.name} >
            <p>Price: {vehicle.price}</p>
            <p>Description: {vehicle.description}</p>
            <p>Year: {vehicle.year}</p>
          </Card>


        ))}
        </div>
      
      </main>
    </div>

  );
};

export default VehiclesPage;
