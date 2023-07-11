import { FilterForm } from "./FilterForm/FilterForm";
import { FormInput } from "./FormInput/FormInput";
import { BlockContacts } from "./ListContacts/ListContacts";
import { Title } from "./TitleComponent/Title.styled";

export const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <FormInput />
      <FilterForm/>
      <BlockContacts/>
    </>
  );
};
