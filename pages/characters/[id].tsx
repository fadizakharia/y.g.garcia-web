import React from "react";
import client from "../../src/utils/apollo";
import CharacterDisplay from "../../src/components/CharacterDisplay";
import { getAllCharactersQuery, getCharacterQuery } from "../api/gql/queries";
import Head from "next/head";
export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: getAllCharactersQuery,
  });
  const characters = data.getAllCharacters;

  const paths = characters.map((character) => {
    return {
      params: { id: character.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await client.query({
    query: getCharacterQuery,
    variables: { charId: id },
  });
  return {
    props: {
      character: data.getCharacter.character,
    },
  };
};
const Character = ({ character }) => {
  return (
    <div>
      <Head>
        <title>YGGARCIA | {character.name}</title>
        <meta
          name="description"
          content={character.bio.substr(0, 150) + "..."}
        />
      </Head>
      <CharacterDisplay character={character} />;
    </div>
  );
};
export default Character;
