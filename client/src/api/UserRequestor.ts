import { useState } from "react";
const axios = require('axios').default;

export default function User() {

    const [users, setUser] = useState<any[]>([]);

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleDelete = async (uid: string) => {
      try {
        await axios.delete(`http://localhost:3000/user/${uid}`);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };
  
    // Check if type recieved is json or string
    const handleUpdate = async (uid: string, updatePackage: any) => {
      try {
        await axios.put(
          `http://localhost:3000/user/${uid}`,
          updatePackage,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };
  
    // Check if type recieved is json or string
    const handleCreation = async (creationPackage: any) => {
      try {
        await axios.post("http://localhost:3000/student", creationPackage, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };

    }
