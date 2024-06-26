import { FormPage } from "components/layout/FormPage";
import { LoginForm } from "features/auth";
import { FC } from "react";

export const LoginPage: FC<{}> = ({}) => {
  return (
    <FormPage>
      <LoginForm />
    </FormPage>
  );
};
