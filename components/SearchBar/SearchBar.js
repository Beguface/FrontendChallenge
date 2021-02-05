import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import Router from "next/router";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonRef = React.useRef();

  const initalValues = {
    term: "",
    location: "",
  };

  const validationSchema = Yup.object({
    term: Yup.string().required("termino requerido"),
    location: Yup.string().required("Ubicacion requerida"),
  });

  const handleOnSubmit = (values, actions) => {
    const { term, location } = values;
    Router.push({
      pathname: "/search",
      query: {
        term: term,
        location: location,
      },
    });
    actions.resetForm();
    onClose();
  };

  return (
    <>
      <InputGroup mt={["2"]} ml={["0", "6"]} maxW={["sm", "40%"]}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Box
          d="flex"
          as="button"
          ref={buttonRef}
          alignItems="center"
          border="1px solid"
          borderRadius="0.375rem"
          outline="0"
          borderColor="inherit"
          height="10"
          pl="10"
          pr="4"
          width="100%"
          onClick={onOpen}
        >
          Buscar
        </Box>
      </InputGroup>

      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <Formik
              initialValues={initalValues}
              validationSchema={validationSchema}
              onSubmit={handleOnSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <DrawerBody mt="50px">
                    <SimpleGrid columns={[1, 2]} spacing={[1, 10]}>
                      <Field name="term">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.touched.term && form.errors.term}
                          >
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300" />}
                              />
                              <Input
                                {...field}
                                type="text"
                                autoComplete="off"
                                name="term"
                                placeholder="Pizza, hamburguesas, hot dog..."
                              />
                            </InputGroup>
                            {form.touched.term && form.errors.term ? (
                              <FormErrorMessage fontSize="xs">
                                {form.errors.term}
                              </FormErrorMessage>
                            ) : (
                              <Box height="25px" />
                            )}
                          </FormControl>
                        )}
                      </Field>

                      <Field name="location">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.touched.location && form.errors.location
                            }
                          >
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<SettingsIcon color="gray.300" />}
                              />
                              <Input
                                {...field}
                                type="text"
                                autoComplete="off"
                                name="location"
                                placeholder="Algún lugar cercano..."
                              />
                            </InputGroup>
                            {form.touched.location && form.errors.location ? (
                              <FormErrorMessage fontSize="xs">
                                {form.errors.location}
                              </FormErrorMessage>
                            ) : (
                              <Box height="25px" />
                            )}
                          </FormControl>
                        )}
                      </Field>
                    </SimpleGrid>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Volver
                    </Button>
                    <Button type="submit" isLoading={isSubmitting}>
                      Buscar
                    </Button>
                  </DrawerFooter>
                </Form>
              )}
            </Formik>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SearchBar;
