import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
 const albumList= albums.map((item, index) => 
  <AlbumCard
  name={item.name}
  image={item.image}
  genre={item.genre}
  key={index}
/>
  )
  return (
    <section className="albums">
     {albumList}
    </section>
  );
}

export default AlbumList;
