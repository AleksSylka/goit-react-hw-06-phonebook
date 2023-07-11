import { styled } from "styled-components";

export const ListContacts = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column
`;

export const ItemContact = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    width: auto;
    padding: 10px;
`;

export const ItemText = styled.p`
    padding: 5px;
    margin: 0;
`;