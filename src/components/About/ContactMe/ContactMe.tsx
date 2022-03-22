import { Container, Text } from "@chakra-ui/layout";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const ContactMe = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "Your page is _amazing_!",
    },
  });

  const toast = useToast();

  return (
    <Container data-testid="ContactMe-root">
      <Text>
        Do you have a thought that you'd like to share with me? A "kudos dude"
        message? A funny emoji that you think should be in every header element?
        Go ahead and send it to me!
      </Text>

      <Box
        marginTop="10"
        border="1px"
        borderColor="gray.200"
        padding="5"
        paddingBottom="50"
      >
        <FormControl id="email">
          <FormLabel>Return Email (optional)</FormLabel>
          <Input
            {...register("email", {
              minLength: { message: "email length not valid", value: 10 },
            })}
            isInvalid={!!errors.email?.message?.length}
          />
          <FormHelperText>{errors.email?.message || ""}</FormHelperText>
        </FormControl>

        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input
            {...register("subject", {
              required: "a subject is required",
              minLength: { message: "subject length too short", value: 5 },
              maxLength: { message: "subject length too long", value: 40 },
            })}
            isInvalid={!!errors.subject?.message?.length}
          />
          <FormHelperText>{errors.subject?.message || ""}</FormHelperText>
        </FormControl>

        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register("message", {
              required: "a message is required",
              minLength: { message: "message too short", value: 1 },
              maxLength: {
                message: "ok buddy, that message is a bit too long",
                value: 400,
              },
            })}
            isInvalid={!!errors.message?.message?.length}
          />
          <FormHelperText>{errors.message?.message || ""}</FormHelperText>
          <FormHelperText>
            {watch("message").length}/400 characters
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          float="right"
          onClick={handleSubmit(
            (data) => {
              toast({
                title: "form is being submitted",
                status: "info",
                duration: 5000,
                isClosable: true,
              });

              const encode = (plainData: any) => {
                return Object.keys(plainData)
                  .map(
                    (key) =>
                      encodeURIComponent(key) +
                      "=" +
                      encodeURIComponent(plainData[key])
                  )
                  .join("&");
              };
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...data }),
              })
                .then(() =>
                  toast({
                    title: "Successful form submission!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                )
                .catch((error) => {
                  toast({
                    title: "Failed form submission",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                  console.error(error);
                });
            },
            (formErrors) => {
              console.error("failed form submission errors");
              console.info(formErrors);
            }
          )}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};
