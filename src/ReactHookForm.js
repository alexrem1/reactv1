import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ReactHookForm() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required"),
    email: yup.string().email().required(),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, "You must be over 18 to register")
      .typeError("Please enter your age")
      .required("You must be over 18 to register"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
        "Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    inputRef.current.querySelectorAll("input").forEach((inp) => {
      inp.value = "";
    });
    inputRef.current.querySelector("input").focus();
  };

  const inputRef = useRef();
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <br />
        <input type="text" placeholder="Email..." {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <br />
        <input type="number" placeholder="Age..." {...register("age")} />
        <br />
        {errors.age && <p>{errors.age.message}</p>}

        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <br />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;
