import Head from "next/head";
import React from "react";
import Characters from "../../src/components/Characters";
import client from "../../src/utils/apollo";
import { getCharactersQuery } from "../api/gql/queries";
export async function getServerSideProps({ query: { page = 1 } }) {
  const { data } = await client.query({
    query: getCharactersQuery,
    variables: {
      page: page - 1,
      step: 10,
    },
  });
  return {
    props: {
      characters: data.getCharacters.characters,
      page,
      total: data.getCharacters.total,
    },
  };
}

const Character = ({ characters, page, total }) => {
  <Head>
    <title>Y.G. GARCIA | Characters</title>
    <meta
      name="description"
      content={
        'View the characters that belong to the book "The jewel of her desires" i recommend you. The cast of the Jewel of Her Desire is broken into four factions where the term Hero and Villain mean nothing. Whoever gets control of all 12 soul Light Jewels can reshape reality. take a look into commander zakharia he\'s awesome'
      }
    />
  </Head>;
  return (
    <div>
      <Characters characters={characters} page={page} total={total} />;
    </div>
  );
};
export default Character;
/*
azzam(red) is a failure for being a lebanese in denial and beta.
tyrese(yellow) is a beta aswell but oblivious when it comes to woman because he doesnt realise blue rangers like him also he got my tech to work when i couldn't
ava(blue) she's pretty but clutz
goki(green) lebanese but gets on my nerves but tries to punch me so i have to kill him asap
yukimi(white) an affective lebanese leader as long as she is not in my way.
yoan(silver) adds fuel to the fire every time reckless idiot.
lord banrek the biggest and most dangerous cry baby in all human history
Queen The biggest pain in my ass.
official fadi comments if you're a dev and can read this don't tell anyone or i'll send in a drone strike. 
*/
