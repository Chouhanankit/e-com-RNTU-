import React, { useEffect, useState } from "react";
import AllUsers from "../Components/AllUsers"; 
import axios from "axios";

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://best-deal-backend.onrender.com/api/user");
        setUsers(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="md:px-10 px-2 mb-2">
      <h1 className="text-center my-10 md:text-4xl text-xl">All Users</h1>
      {users?.map((user) => (
        <AllUsers key={user._id} user={user} />
      ))}
    </div>
  );
};

export default AllUsersPage;
