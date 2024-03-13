import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HeadingComponent from "../HeadingComponents";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render header with login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeadingComponent />
      </Provider>
    </BrowserRouter>
  );

   const loginButton = screen.getByRole("button",{name: "Login"});  //multiple value check

//   const cartItem = screen.getByText(/cart/); // regex match

//   const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name: "Logout"});

  expect(logoutButton).toBeInTheDocument();

});
