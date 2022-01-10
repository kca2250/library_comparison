import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { instance } from "../apiClient";
import SampleCard from "./SampleCard";

export interface USER {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const CardList: React.FC = () => {
  const [users, setUsers] = useState<USER[]>([]);
  useEffect(() => {
    instance.get("users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  console.log(users);
  return (
    <>
      {users.map((user: USER, index: number) => {
        return (
          <Box m={3} p={2} key={index}>
            <SampleCard
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              address={user.address}
              website={user.website}
              company={user.company}
            />
          </Box>
        );
      })}
    </>
  );
};

export default CardList;
