import { Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Character from "./Character";
interface charactersProps {
  page: number;
  characters: any;
  total: number;
}
const Characters: React.FC<charactersProps> = ({ characters, page, total }) => {
  const router = useRouter();
  return (
    <div style={{ margin: "80px 10px" }}>
      <Grid style={{ padding: "10px" }} container spacing={2}>
        {characters && characters?.length > 0 ? (
          characters.map((character: any) => {
            return <Character key={character.id} character={character} />;
          })
        ) : (
          <Typography color="error" variant="h4" align="center">
            No Characters Found!
          </Typography>
        )}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0",
        }}
      >
        <Pagination
          color="primary"
          page={page}
          onChange={(_, value) => {
            router.push(`/characters/?page=${value}`);
          }}
          count={Math.ceil(total / 10)}
        />
      </div>
    </div>
  );
};

export default Characters;
