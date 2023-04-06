import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/UI/Layout";
import Card from "../components/UI/Card";
import IncompleteProfile from "../components/UI/IncompleteProfile";

export default function StorePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);

  const isProfileCompleted = Object.values(user).every((item) => item !== "");

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((res) => {
      setFilms(res.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      {isProfileCompleted ? (
        <>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <main className="mx-auto grid max-w-md grid-cols-3 gap-4">
              {films.map((film) => (
                <Card key={film.episode_id} film={film} />
              ))}
            </main>
          )}
        </>
      ) : (
        <IncompleteProfile />
      )}
    </Layout>
  );
}
