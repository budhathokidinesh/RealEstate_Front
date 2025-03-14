import { Modal, Button, Container, Stepper } from "@mantine/core";
import { useState } from "react";
import AddLocation from "@/components/AddLocation/AddLocation.jsx";

const AddPropertyModal = () => {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Add Property</Button>
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
              <AddLocation />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
              Step 2 content: Verify email
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
              Step 3 content: Get full access
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
