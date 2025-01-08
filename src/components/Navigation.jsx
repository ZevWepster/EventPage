import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { AddEventModal } from "./AddEvent";
import { Link } from "react-router-dom";

export const Navigation = ({ onAddEvent, onSearch, onFilter, categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        padding={4}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Heading as={Link} to="/" size="md">
          Event Dashboard
        </Heading>
        <Flex gap={4} alignItems="center" flexWrap="wrap">
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearchChange}
            width="200px"
            bg="white"
            color="black"
          />

          <Select
            placeholder="Filter by Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            bg="white"
            color="black"
            width="200px"
          >
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <Button colorScheme="green" onClick={onOpen}>
            Add Event
          </Button>
        </Flex>
      </Flex>

      <AddEventModal
        isOpen={isOpen}
        onClose={onClose}
        onAddEvent={onAddEvent}
      />
    </>
  );
};
