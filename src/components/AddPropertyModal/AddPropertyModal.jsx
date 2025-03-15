import { Modal, Button, Container, Stepper } from "@mantine/core";
import { useState } from "react";
import AddLocation from "@/components/AddLocation/AddLocation.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "@/components/UploadImage/UploadImage";
import BasicDetails from "@/components/BasicDetails/BasicDetails.jsx";
import Facilities from "@/components/Facilities/Facilities.jsx";

const AddPropertyModal = ({ opened, setOpened }) => {
  //   const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    ownerEmail: user?.email,
  });
  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <>
      {/* <Button onClick={() => setOpened(true)}>Add Property</Button> */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside
        size="90rem"
      >
        <Container h={"40rem"} w={"100%"}>
          <Stepper
            active={active}
            onStepClick={setActive}
            allowNextStepsSelect={false}
          >
            <Stepper.Step label="Location" description="Address">
              <AddLocation
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="Upload Image" description="Image">
              <UploadImage
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step
              label="Basic Information"
              description="Basic Information"
            >
              <BasicDetails
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step>
              <Facilities
                prevStep={prevStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                setOpened={setOpened}
                setActiveStep={setActive}
              />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </Container>
      </Modal>
    </>
  );
};

export default AddPropertyModal;
