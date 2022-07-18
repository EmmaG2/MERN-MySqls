import { Title } from "../styledComponents/Tittle";

import Container from "@mui/material/Container";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
  Grid,
} from "@mui/material";

import { creteTaskRequest } from "../api/task.api.js";

import { Formik, Form } from "formik";

function taksForm() {
  return (
    <Container>
      <Title>Create Task</Title>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await creteTaskRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={12}>
                <FormControl>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <Input
                    type="text"
                    aria-describedby="title-helper"
                    placeholder="Read More"
                    name="title"
                    onChange={handleChange}
                  />
                  <FormHelperText id="title-helper">
                    El titulo debe ser breve
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item md={12}>
                <FormControl>
                  <InputLabel>Description</InputLabel>
                  <Input
                    type="text"
                    aria-describedby="description-helper"
                    placeholder="Read the holy bible"
                    name="description"
                    onChange={handleChange}
                  />
                  <FormHelperText id="description-helper">
                    Ingresa la descripcion de tu tarea
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item md={12}>
                <Button variant="outlined" color="secondary" type="submit">
                  Create Task
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default taksForm;
