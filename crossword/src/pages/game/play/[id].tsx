import { Play } from "@/components/Play";
import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { PlayPuzzle } from "@/components/PlayPuzzle";
type PlayPageProps = {
  game_id: string;
};

export default function PlayPage({ game_id }: PlayPageProps) {
  const router = useRouter();
  const { player } = router.query;

  return (
    <>
      <Head>
        <title>Crossword</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Boolean(player) ? (
        <Play gameId={game_id} player={player as string} />
      ) : (
        <PlayPuzzle gameId={game_id} />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  PlayPageProps,
  { id: string }
> = async ({ params }) => {
  return {
    props: {
      game_id: params?.id ?? "",
    },
  };
};
