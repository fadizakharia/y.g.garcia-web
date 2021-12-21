import Head from "next/head";
import React from "react";
import CharacterDisplay from "../../src/components/CharacterDisplay";
import client from "../../src/utils/apollo";
import { getAllCharactersQuery, getCharacterQuery } from "../api/gql/queries";
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
        <title>Y.G. GARCIA | {character.name}</title>
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
