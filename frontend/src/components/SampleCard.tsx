import React, { useState } from "react";
import {
  Avatar,
  Box,
  Collapse,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { USER } from "./CardList";

const SampleCard: React.FC<USER> = (props) => {
  const { name, username, email, phone, website, company, address } = props;
  const [show, setShow] = useState<boolean>(false);
  const handleToggle = () => setShow(!show);

  return (
    <SimpleGrid
      spacing="3"
      m="2"
      p="4"
      border="1px solid whitesmoke"
      borderRadius="4px"
    >
      {/* Card Header */}
      <Flex align="center">
        <Avatar />
        <Box ml="4">
          <Text fontWeight="bold" fontSize="lg">
            {name}:<span style={{ color: "whitesmoke" }}>{username}</span>
          </Text>
          <Box>
            <Tag>email:{email}</Tag>
            <Tag>phone:{phone}</Tag>
          </Box>
          <Link color="blue.500" href={website}>
            {website}
          </Link>
        </Box>
      </Flex>

      {/* Card Content */}
      <Box>
        <Text mb="2" as="h1" fontWeight="bold">
          {company.name}
        </Text>
        <Text>{company.catchPhrase}</Text>
        <Text>{company.bs}</Text>
      </Box>

      {/* Card Actions */}
      <Flex align="center" justify="space-between">
        <Box>
          <FontAwesomeIcon color="#686868" size="lg" icon={faHeart} />
          <FontAwesomeIcon
            color="#686868"
            style={{ marginLeft: "8px" }}
            size="lg"
            icon={faShareAlt}
          />
        </Box>
        <IconButton
          bgColor="white"
          onClick={handleToggle}
          icon={
            <FontAwesomeIcon color="#686868" size="lg" icon={faChevronDown} />
          }
          aria-label="open-collapse"
        />
      </Flex>

      <Collapse in={show} animateOpacity>
        <Box mt="4">
          <Text mb="1" fontSize="lg" fontWeight="bold">
            ADRESS
          </Text>
          <Tag children={address.zipcode} />

          <Text>
            {address.city} {address.street} {address.suite}
          </Text>
          <Text>
            {address.geo.lat}: {address.geo.lng}
          </Text>
        </Box>
      </Collapse>
    </SimpleGrid>
  );
};

export default SampleCard;
