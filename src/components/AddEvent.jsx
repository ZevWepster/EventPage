import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Stack,
  useToast,
} from "@chakra-ui/react";

export const AddEventModal = ({ isOpen, onClose, onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    startTime: "",
    endTime: "",
    categoryIds: [],
  });
  const [categories, setCategories] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to load categories",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    fetchCategories();
  }, []);

  const resetFormData = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      location: "",
      startTime: "",
      endTime: "",
      categoryIds: [],
    });
  };

  const handleSubmit = async () => {
    try {
      // Ensure that categoryIds are integers
      const updatedFormData = {
        ...formData,
        categoryIds: formData.categoryIds.map((id) => parseInt(id, 10)),
        id: Date.now().toString(),
      };

      const response = await fetch("http://localhost:3001/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        toast({
          title: "Error adding event",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const createdEvent = await response.json();
      onAddEvent(createdEvent);
      toast({
        title: "Event added successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      resetFormData();
      onClose();
    } catch (error) {
      console.error("Network Error:", error);

      toast({
        title: "Network error",
        description: "Unable to reach the server.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCategoryChange = (categoryId) => {
    setFormData((prevFormData) => {
      const isSelected = prevFormData.categoryIds.includes(categoryId);
      const updatedCategoryIds = isSelected
        ? prevFormData.categoryIds.filter((id) => id !== categoryId)
        : [...prevFormData.categoryIds, categoryId];
      return { ...prevFormData, categoryIds: updatedCategoryIds };
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onAddEvent={onAddEvent}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Start Time</FormLabel>
            <Input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>End Time</FormLabel>
            <Input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Categories</FormLabel>
            <Stack spacing={2}>
              {categories.map((category) => (
                <Checkbox
                  key={category.id}
                  isChecked={formData.categoryIds.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </Checkbox>
              ))}
            </Stack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
              resetFormData();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
