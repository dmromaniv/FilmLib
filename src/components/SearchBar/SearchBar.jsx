import { Notify } from "notiflix/build/notiflix-notify-aio";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import style from "./SearchBar.module.scss";

const SearchBar = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const inputtedSearchQuery = event.target.value;
    setSearchQuery(inputtedSearchQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/films/${searchQuery}/1`);
    } else {
      Notify.warning("Please, enter the film title to search ");
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter film title"
        value={searchQuery}
        onChange={handleChange}
      />
      <button className={style.button} type="submit">
        <Image
          src="/images/search-icon.svg"
          alt="search icon"
          width={15}
          height={15}
        />
      </button>
    </form>
  );
};

export default SearchBar;
