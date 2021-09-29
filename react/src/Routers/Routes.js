import TutorialList from "../components/TutorialList/TutorialList";
import AddTutorialForm from "../components/AddTutorialForm/AddTutorialForm";
import UpdateTutorialForm from "../components/UpdateTutorialForm/UpdateTutorialForm";
import Login from "../components/Login/Login";

export const RoutePath = {
  Login: "/",
  TutorialList: "/home",
  AddTutorialForm: "/add",
  UpdateTutorialForm: "/update/:id",
};

export const routes = [
  {
    name: "AddTutorialForm",
    path: RoutePath.AddTutorialForm,
    component: AddTutorialForm,
  },
  {
    name: "UpdateTutorialForm",
    path: RoutePath.UpdateTutorialForm,
    component: UpdateTutorialForm,
  },
  {
    name: "TutorialList",
    path: RoutePath.TutorialList,
    component: TutorialList,
  },
  {
    name: "Login",
    path: RoutePath.Login,
    component: Login,
  },
];
