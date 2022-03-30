import * as React from "react";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { useForm } from "react-hook-form";

const FormInput = (props: any) => (
  <div className="user-details-input">
    <Input label={props.label} />
  </div>
);

const UserForm = () => {
  const [enable, setEnable] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: any = (data: any) => console.log(data);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className={"user-details"}>
        <h2 color="text-primary">User Details</h2>

        <FormInput
          label="First name"
          inputType="text"
          register={register("firstName", {
            required: {
              value: true,
              message: "First Name is Required",
            },
          })}
        />
        {errors?.firstName && (
          <>
            <span>
              <small>{errors.firstName.message}</small>
            </span>
          </>
        )}

        <FormInput
          label="Last name"
          inputType="text"
          register={register("lastName", {
            required: {
              value: true,
              message: "Last Name is Required",
            },
          })}
        />
        <br />

        <Checkbox
          label={enable ? "Enable" : "Disabled"}
          onClick={() => setEnable(!enable)}
        />

        <br />
        <br />
        <Button type="submit" themeColor={"primary"}>
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
