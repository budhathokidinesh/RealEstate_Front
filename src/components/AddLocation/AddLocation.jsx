import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "@/utils/common.js";
import { Select } from "@mantine/core";

const AddLocation = ({ propertyDetails, setPropertyDetails }) => {
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });
  const { country, city, address } = from.values;
  return (
    <form>
      {/* left side  */}
      <div className="flexCenter">
        {/* inouts  */}
        <div className="flexColStart">
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            {...form.getInputProps("country", { type: "input" })}
          />
        </div>
      </div>

      {/* right side  */}
    </form>
  );
};

export default AddLocation;
