import * as React from 'react';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './_userForm.scss';

const FormInput = (props: any) => (
  <div>
    <Input
      className='user-details-input'
      label={props.label}
      {...props.register}
    />
  </div>
);

interface IFormInputs {
  firstName: string;
  lastName: string;
  username: string;
  hiddenField: string;
  allowRights: boolean;
}

const UserForm = () => {
  const [enable, setEnable] = React.useState(false);
  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(25, 'Max Characters Limited')
      .required('First Name is Required')
      .matches(/^[A-Za-z]+$/i, 'Only Alphabets are allowed'),
    lastName: Yup.string()
      .required('Last Name Is Required')
      .max(25, 'Max Characters Limited')
      .matches(/^[A-Za-z]+$/i, 'Only Alphabets are allowed'),
    username: Yup.string()
      .required('Username is Required')
      .max(15, 'User name cannot exceed 15 characters')
      .matches(/^[A-Za-z0-9]+$/i, 'Only Alphanumeric characters are allowed'),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>(validationOpt);

  const onSubmit: any = (data: any) => {
    const { firstName, lastName } = data;
    if ((firstName + ' ' + lastName).length > 40) {
      toast.error('Only 40 characters are allowed for full name');
      return false;
    }
    console.log('Form SUbmit');
  };

  return (
    <React.Fragment>
      <div className='form-bg'>
        <form onSubmit={handleSubmit(onSubmit)} className={'user-details'}>
          <h2 className='text-primary'>User Details</h2>

          <FormInput label='First name' register={register('firstName')} />
          {errors?.firstName && (
            <span>
              <small>{errors.firstName.message}</small>
            </span>
          )}

          <FormInput
            label='Last name'
            inputType='text'
            register={register('lastName')}
          />
          {errors?.lastName && (
            <span>
              <small>{errors.lastName.message}</small>
            </span>
          )}
          <FormInput
            label='Username'
            inputType='text'
            register={register('username', {
              required: {
                value: true,
                message: 'Username is Required',
              },
              maxLength: {
                value: 15,
                message: 'User name cannot exceed 15 characters',
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: 'Only Alphanumeric characters are allowed',
              },
            })}
          />
          {errors?.username && (
            <span>
              <small>{errors.username.message}</small>
            </span>
          )}
          <br />
          <br />
          <Controller
            name='allowRights'
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                label={field?.value ? 'Enabled' : 'Disabled'}
                {...field}
              />
            )}
          />
          <input type='hidden' {...register('hiddenField')} />
          <br />
          <br />
          <Button type='submit' themeColor={'primary'}>
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
