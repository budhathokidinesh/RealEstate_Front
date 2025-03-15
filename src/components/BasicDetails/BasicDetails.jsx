import { useForm } from "@mantine/form";
import { validateString } from "@/utils/common.js";
import { Box, Button, Group, NumberInput, TextInput } from "@mantine/core";

const BasicDetails = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) =>
        value < 1000 ? "Must be greater than 999 dollors" : null,
    },
  });
  const { title, description, price } = form.values;
  const handleOnSubmit = () => {
    const { hasError } = form.validate();
    if (!hasError) {
      setPropertyDetails((prev) => ({ ...prev, title, description, price }));
      nextStep();
    }
  };
  return (
    <Box maw="50%" mx="auto" my="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps("title")}
        ></TextInput>
        <NumberInput
          withAsterisk
          label="Price"
          placeholder="$1000"
          min={0}
          {...form.getInputProps("price")}
        ></NumberInput>
        <TextInput
          withAsterisk
          label="Description"
          placeholder="Desciption"
          {...form.getInputProps("description")}
        ></TextInput>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Next Step</Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
