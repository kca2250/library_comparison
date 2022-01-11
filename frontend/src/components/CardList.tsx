import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { instance } from "../apiClient";
import SampleCard from "./SampleCard";

export interface USER {
  id?: number;
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
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      {users.map((user: USER, index: number) => {
        return (
          <Box key={index}>
            <SampleCard
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              company={user.company}
              address={user.address}
            />
          </Box>
        );
      })}
    </>
  );
};

export default CardList;
